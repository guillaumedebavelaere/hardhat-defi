import { ethers, getNamedAccounts } from "hardhat";
import { Lock } from "../typechain-types";

async function withdraw() {
    const { deployer } = await getNamedAccounts()
    const signer = await ethers.getSigner(deployer)
    const balanceBefore = await signer.getBalance()
    console.log(`balance before: ${ethers.utils.formatEther(balanceBefore.toString())}`);

    const lock: Lock = await ethers.getContract("Lock");

    const provider = ethers.getDefaultProvider();
    const balanceLock = await provider.getBalance(lock.address)
    console.log(`Lock balance: ${ethers.utils.formatEther(balanceLock)}`)

    const tx = await lock.withdraw();
    const txReceipt = await tx.wait(1)
    
    const amount = txReceipt.events![0].args!.amount
    console.log(`Withdraw amount: ${ethers.utils.formatEther(amount)}`)
    const when = txReceipt.events![0].args!.when
    console.log(`when: ${when}`)
    
    const balanceAfter = await signer.getBalance()
    console.log(`balance after: ${ethers.utils.formatEther(balanceAfter.toString())}`);
}

withdraw()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
