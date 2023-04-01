import * as dotenv from "dotenv"

dotenv.config()

const networkConfig: ExtraConfig = {
    31337: {
        name: "hardhat",
        verifyContract: false,
        blockConfirmations: 1,
    },
    5: {
        name: "goerli",
        verifyContract: true,
        blockConfirmations: 6,
    },
    80001: {
        name: "mumbai",
        verifyContract: true,
        blockConfirmations: 6,
    },
}

const developmentChains = ["hardhat", "localhost"]

interface ExtraConfig {
    [key: number]: {
        name: string
        verifyContract: boolean
        blockConfirmations: number
    }
}

export { networkConfig, developmentChains }
