import { ethers } from 'hardhat'
import { ParametersStruct } from '../typechain-types/contracts/WESaleFactory'

async function main() {
  // avax uniswap v2 router
  // const routerAddress = '0x52B2031Ea4232b68b88e1577206dc388EFcE2E49'
  const routerAddress = '0x29f7Ad37EC018a9eA97D4b3fEebc573b5635fA84'

  // feeTod
  const feeTo = '0x060E1E1De68631c81C8EA78EFd50aaAFE6eF3177'
  const signer = '0x39AD2809F73086A63Ab2F0D8D689D1cc02579abA'
  const [owner] = await ethers.getSigners()

  const WESaleFactory = await ethers.getContractFactory('WESaleFactory')
  const wesaleFactory = await WESaleFactory.deploy(feeTo, signer)
  await wesaleFactory.deployed()

  console.log(`WESale deployed to ${wesaleFactory.address}`)
  const dexRouterBytes = ethers.utils.id('DEX_ROUTER')
  const dexRouterSetterBytes = ethers.utils.id('DEX_ROUTER_SETTER_ROLE')
  await wesaleFactory.grantRole(dexRouterSetterBytes, owner.address)
  await sleep(3000)
  await wesaleFactory.grantRole(dexRouterBytes, routerAddress)
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
