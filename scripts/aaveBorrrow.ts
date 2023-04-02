import { BigNumber, Signer } from "ethers"
import { ethers, getNamedAccounts, network } from "hardhat"
import { Address } from "hardhat-deploy/dist/types"
import { networkConfig } from "../helper-hardhat-config"
import { AMOUNT, getWeth } from "../scripts/getWeth"
import { ILendingPool, ILendingPoolAddressesProvider } from "../typechain-types"

const aaveBorrow = async () => {
    await getWeth()
    const { deployer } = await getNamedAccounts()
    const lendingPool = await getLendingPool(deployer)
    console.log(`Lending pool address: ${lendingPool.address}`)

    const wethTokenAddress = networkConfig[network.config!.chainId!].wethToken!
    await approveErc20(wethTokenAddress, lendingPool.address, AMOUNT, deployer)
    console.log(
        `Depositing WETH using ${wethTokenAddress} as WETH token and ${deployer} as address`
    )
    await lendingPool.deposit(wethTokenAddress, AMOUNT, deployer, 0)
    console.log("Desposited!")

    const borrowUserData = await getBorrowUserData(lendingPool, deployer)
    let availableBorrowsETH = borrowUserData[0]

    const daiETHPrice = await getDaiETHPrice()
    const amountDaiToBorrow = availableBorrowsETH.div(daiETHPrice)
    const amountDaiToBorrowWei = ethers.utils.parseEther(amountDaiToBorrow.toString())
    console.log(`You can borrow ${amountDaiToBorrow.toString()} DAI`)
    await borrowDai(
        networkConfig[network.config!.chainId!].daiToken!,
        lendingPool,
        amountDaiToBorrowWei.toString(),
        deployer
    )

    await getBorrowUserData(lendingPool, deployer)
    await repay(
        amountDaiToBorrowWei.toString(),
        networkConfig[network.config!.chainId!].daiToken!,
        lendingPool,
        deployer
    )
    await getBorrowUserData(lendingPool, deployer)
}

const getLendingPool = async (account: string | Signer | undefined) => {
    const iLendingPoolAddressesProvider: ILendingPoolAddressesProvider = await ethers.getContractAt(
        "ILendingPoolAddressesProvider",
        "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
        account
    )
    console.log(`iLendingPoolAddressesProvider address: ${iLendingPoolAddressesProvider.address}`)

    const lendinPoolAddress = await iLendingPoolAddressesProvider.getLendingPool()
    const lendingPool: ILendingPool = await ethers.getContractAt(
        "ILendingPool",
        lendinPoolAddress,
        account
    )
    return lendingPool
}

const approveErc20 = async (
    erc20Address: string,
    spenderAddress: string,
    amount: string,
    signer: Address
) => {
    const erc20Token = await ethers.getContractAt("IERC20", erc20Address, signer)
    const txResponse = await erc20Token.approve(spenderAddress, amount)
    await txResponse.wait(1)
    console.log("Approved!")
}

const getBorrowUserData = async (
    lendingPool: ILendingPool,
    account: Address
): Promise<[BigNumber, BigNumber]> => {
    const { totalCollateralETH, totalDebtETH, availableBorrowsETH } =
        await lendingPool.getUserAccountData(account)
    console.log(`You have ${ethers.utils.formatUnits(totalCollateralETH)} worth of ETH deposited.`)
    console.log(`You have ${ethers.utils.formatUnits(totalDebtETH)} worth of ETH borrowed.`)
    console.log(`You can borrow ${ethers.utils.formatUnits(availableBorrowsETH)} worth of ETH.`)
    return [availableBorrowsETH, totalDebtETH]
}

const getDaiETHPrice = async () => {
    const daiEthPriceFeed = await ethers.getContractAt(
        "AggregatorV3Interface",
        networkConfig[network.config!.chainId!].daiEthPriceFeed!
    )
    const price = (await daiEthPriceFeed.latestRoundData())[1]
    console.log(`The DAI/ETH price is ${price.toString()}`)
    return price
}

const borrowDai = async (
    daiAddress: string,
    lendingPool: ILendingPool,
    amountDaiToBorrow: string,
    account: Address
) => {
    const borrowTx = await lendingPool.borrow(daiAddress, amountDaiToBorrow, 1, 0, account)
    await borrowTx.wait(1)
    console.log("You've borrowed!")
}

const repay = async (amount: string, daiAddress: string, lendingPool: ILendingPool, account: Address) => {
    await approveErc20(daiAddress, lendingPool.address, amount, account)
    const repayTx = await lendingPool.repay(daiAddress, amount, 1, account)
    await repayTx.wait(1)
    console.log("Repaid!")
}

aaveBorrow()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
