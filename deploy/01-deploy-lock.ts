import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { ethers } from "hardhat";
import { verify } from "../utils/verify";
import { log } from "console";


const deployLock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const chainId = network.config.chainId || 31337;

    const blockConfirmations = networkConfig[chainId].blockConfirmations;

    const currentTimestampInSeconds = Math.round(Date.now() / 1000)
    const unlockTime = currentTimestampInSeconds + 60
    const lockedAmount = ethers.utils.parseEther("0.001")

    const args = [
        unlockTime
    ];

    const lock = await deploy("Lock", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: blockConfirmations,
        value: lockedAmount
    });

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...");
        await verify(lock.address, args);
    }
};

export default deployLock;
deployLock.tags = ["all", "lock"];
