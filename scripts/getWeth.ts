import { ethers, getNamedAccounts, network } from "hardhat"
import { networkConfig } from "../helper-hardhat-config"
import { IWETH } from "../typechain-types"

export const AMOUNT = ethers.utils.parseEther("0.01").toString()

export const getWeth = async () => {
    const { deployer } = await getNamedAccounts()
    const wethTokenAddress = networkConfig[network.config!.chainId!].wethToken!
    const iWeth: IWETH = await ethers.getContractAt(
        "IWETH",
        wethTokenAddress,
        deployer
    )
    const tx = await iWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const balance = await iWeth.balanceOf(deployer)
    console.log(`Got ${balance} WETH`)
}
