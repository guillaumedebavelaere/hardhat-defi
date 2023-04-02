<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Hardhat defi</h3>

  <p align="center">
    Small project using AAVE protocol to deposit borrow and repay loan
    <br />
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
    <li><a href="#linting">Linting</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is using the AAVE protocol to interact with AAVE protocol using hardhat, solidity, typescript.

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

This repo requires a mainnet rpc provider.  
We are going to be forking mainnet, and pretend as if we are interacting with mainnet contracts.

All you'll need, is to set a MAINNET_RPC_URL environment variable in a .env file that you create.

```
yarn hardhat run scripts/aaveBorrow.js
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
