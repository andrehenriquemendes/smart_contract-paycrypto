require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Z3qB9l4LZvy_U2iSrItRT8Flxz5r8qBK',
      accounts: ['bbf773cb66f091ede34ec1e87e1ff7e74acad3181ce092595cf1fa38a92b45df']
    }
  }
}