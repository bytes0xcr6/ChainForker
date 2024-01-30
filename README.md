# ChainForker 🚀

## Overview

Welcome to ChainForker – your go-to service for effortlessly forking blockchain networks and managing token balances like a pro! 🌐💰 This service is powered by the [Hardhat](https://hardhat.org/) development environment, making local Ethereum forks a breeze for your development and [hardhat-deal](https://github.com/Rubilmax/hardhat-deal).

## Features

✨ **Local Forking:** Create local forks of Ethereum chains with lightning speed, tailoring them to your development whims.

💸 **Token Wizardry:** Add ERC-20 token balances to specific user addresses on your forked chains, because who doesn't love a little extra magic?

## Getting Started

Ready to unleash the power of ChainForker? Here's your spellbook:

1. **Set Up the `.env` Magic Portal:** Copy the enchanted `.env.example` file and sprinkle it with your specific configuration. At the very least, reveal the secret of the RPC node to fork and the chain ID.

2. **Summon the Service:** In your command realm, chant the following incantation:

   ```bash
   npm start
   ```

3. **Enter the Fork Dimension:** Your local fork will materialize at http://127.0.0.1:8545. Dive in and let the adventure begin!

4. **Deploy to the Clouds:** For a grander spectacle, consider deploying ChainForker to a hosting service. Let others connect to the forked chain and experience the magic firsthand. Services like [Heroku](https://www.heroku.com/) or [AWS](https://aws.amazon.com/) can host your creation with ease.

## Adding Token Balances

To gift the power of any ERC-20 token to your chosen ones on the forked chain, cast the following spell:

```bash
npx hardhat deal <receiver> <token-address> <amount> --network fork
```

Replace the placeholders with real-world values:

- `<receiver>`: The chosen one's Ethereum address, ready to receive the token magic.
- `<token-address>`: The enchanted address of the ERC-20 token contract.
- `<amount>`: The mystical amount of the ERC-20 token to bestow upon your chosen one.

Example:

```bash
npx hardhat deal 0x976EA74026E726554dB657fA54763abd0C3a0aa9 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619 1000000000000000000 --network fork
```

## Notes from the Wizard's Scroll

- Configure the `.env` file wisely to harmonize with your unique network settings.
- The magic here lies in Hardhat's forking prowess, creating local realms perfect for your testing and development quests.

Embark on your journey with ChainForker and let the blockchain magic unfold. If you stumble upon mysteries or wish to share your wisdom, our wizard council is ready to assist.

May your code be bug-free and your tokens ever bountiful! 🧙✨
