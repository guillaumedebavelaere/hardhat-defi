<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Project title</h3>

  <p align="center">
    Project description
    <br />
    <a href="https://github.com/guillaumedebavelaere/hardhat-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/guillaumedebavelaere/hardhat-template">View Demo</a>
    ·
    <a href="https://github.com/guillaumedebavelaere/hardhat-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/guillaumedebavelaere/hardhat-template/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#quickstart">Quickstart</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a>
        <ul>
            <li><a href="#coverage">Coverage</a></li>
        </ul>
    </li>
    <li><a href="#deployment-to-a-testnet-or-mainnet">Deployment to a testnet or mainnet</a>
    <ul>
            <li><a href="#estimate-gas-cost-in-usd">Estimate gas cost in USD</a></li>
            <li><a href="#verify-on-etherscan">Verify on etherscan</a></li>
        </ul>
    </li>
    <li><a href="#linting">Linting</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a project using hardhat, solidity, typescript.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![Hardhat][HArdhat]][Hardhat-url]
-   [![Solidity][Solidity]][Solidity-url]
-   [![TypeScript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    -   You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
-   [Nodejs](https://nodejs.org/en/)
    -   You'll know you've installed nodejs right if you can run:
        -   `node --version` and get an ouput like: `vx.x.x`
-   [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
    -   You'll know you've installed yarn right if you can run:
        -   `yarn --version` and get an output like: `x.x.x`
        -   You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Quickstart

```
git clone https://github.com/guillaumedebavelaere/hardhat-template
cd hardhat-template
yarn
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

```
yarn hardhat deploy
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TESTS -->

## Testing

```
yarn hardhat test
```

<!-- COVERAGE -->

### Coverage

```
yarn hardhat coverage
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENT -->

## Deployment

```
yarn hardhat deploy --network localhost
```

## Scripts 

```
yarn hardhat run scripts/withdraw.ts --network localhost
```

## Testnet
1. Setup environment variabltes

You'll want to set your `GOERLI_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file. See .env.example as an example file.

-   `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)).
-   `GOERLI_RPC_URL`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?r=30fb9501aa7fc438)
-   
<!-- ESTIMATION GAS COST-->

### Estimate gas cost in USD

To get a USD estimation of gas cost, you'll need a `COINMARKETCAP_API_KEY` environment variable. You can get one for free from [CoinMarketCap](https://pro.coinmarketcap.com/signup).

Then, uncomment the line `coinmarketcap: COINMARKETCAP_API_KEY,` in `hardhat.config.js` to get the USD estimation. Just note, everytime you run your tests it will use an API call, so it might make sense to have using coinmarketcap disabled until you need it. You can disable it by just commenting the line back out.

<!-- VERIFY -->

### Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environemnt variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file as seen in the `.env.example`.

In it's current state, if you have your api key set, it will auto verify goerli contracts!

However, you can manual verify with:

```
yarn hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LINTING -->

## Linting

To check linting / code formatting:

```
yarn lint
```

or, to fix:

```
yarn lint:fix
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gdebavelaere
[product-screenshot]: images/screenshot.png
[Hardhat]: https://img.shields.io/badge/-Hardhat-white.svg?style=for-the-badge&logo=hardhat&colorB=EFF77E
[Hardhat-url]: https://hardhat.org/
[Solidity]: https://img.shields.io/badge/-Solidity-black.svg?style=for-the-badge&logo=solidity&colorB=555
[Solidity-url]: https://docs.soliditylang.org/en/develop/
[Typescript]: https://img.shields.io/badge/-Typescript-black.svg?style=for-the-badge&logo=typescript&colorB=35495E
[Typescript-url]: https://www.typescriptlang.org/
