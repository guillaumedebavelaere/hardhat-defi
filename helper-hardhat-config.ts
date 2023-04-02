import * as dotenv from "dotenv"

dotenv.config()

const networkConfig: ExtraConfig = {
    31337: {
        name: "hardhat",
        verifyContract: false,
        blockConfirmations: 1,
        wethToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        daiEthPriceFeed: "0x773616E4d11A78F511299002da57A0a94577F1f4",
        daiToken: "0x6b175474e89094c44da98b954eedeac495271d0f"
    },
    // 5: {
    //     name: "goerli",
    //     verifyContract: true,
    //     blockConfirmations: 6,
    // },
    // 80001: {
    //     name: "mumbai",
    //     verifyContract: true,
    //     blockConfirmations: 6,
    // },
}

const developmentChains = ["hardhat", "localhost"]

interface ExtraConfig {
    [key: number]: {
        name: string
        verifyContract: boolean
        blockConfirmations: number,
        wethToken: string,
        daiEthPriceFeed: string,
        daiToken: string
    }
}

export { networkConfig, developmentChains }
