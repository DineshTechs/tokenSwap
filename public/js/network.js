async function testNetwork() {

  try {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0x38',
        chainName: 'Smart Chain',
        rpcUrls: ['https://bsc-dataseed.binance.org/'] /* ... */ ,
        blockExplorerUrls: ['https://bscscan.com/'],
        nativeCurrency: {
          name: 'BNB',
          symbol: 'BNB', // 2-6 characters long
          decimals: 18
        }
      }, ],
    });
  } catch (addError) {
    alert(addError)
  }

}



async function mainNetwork() {

  try {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0xA4B1',
        chainName: 'Arbitrum One',
        rpcUrls: ['https://mainnet-rpc.vrblocksscan.io/'] /* ... */ ,
        blockExplorerUrls: ['https://arbiscan.io'],
        nativeCurrency: {
          name: 'ETH',
          symbol: 'ETH', // 2-6 characters long
          decimals: 18
        }
      }, ],
    });
  } catch (addError) {
    alert(addError)
  }

}