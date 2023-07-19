import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      //   viaIR: true,
    },
  },
  gasReporter: {
    enabled: false,
  },

  networks: {
    hardhat: {
      //   allowUnlimitedContractSize: true,
      forking: {
        url: 'https://rpc-tanenbaum.rollux.com',
      },
      //   accounts: [
      //     {
      //       balance: '1000000000000000000000',
      //       privateKey:
      //         '73db539d43d10f1447bf11fe006fb0b532a8978d12b0e69749d2e9bc4b11b2dd',
      //     },
      //   ],
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [
        // 0xc71
        '73db539d43d10f1447bf11fe006fb0b532a8978d12b0e69749d2e9bc4b11b2dd',
        '4908f11eb87c513c93d1698b1a423b67c704873f656def8fdaf94da41031fe95',
        '73db539d43d10f1447bf11fe006fb0b532a8978d12b0e69749d2e9bc4b11b2dd',
        '0ccef9b378142a24bd8ac1274cde56d9a095456372b34165917b029a847b7e41',
      ],
    },
    polygon: {
      url: 'https://polygon.llamarpc.com',
      accounts: [
        // 0xc71
        '73db539d43d10f1447bf11fe006fb0b532a8978d12b0e69749d2e9bc4b11b2dd',
        '4908f11eb87c513c93d1698b1a423b67c704873f656def8fdaf94da41031fe95',
      ],
      //   gasPrice: 300e9,
      //   gas: 25e6,
    },
  },
}

export default config
