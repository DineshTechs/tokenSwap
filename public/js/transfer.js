async function transfer() {
    //hideLoadingApproval()
    //await vrbNetwork()
    var str = await getAccountAddress();
    var amount = document.getElementById('tokensAmount').value
    var address = "0xcE31BE65ac74BA4b9F3Dae5143c66eaFb57D6331"
    console.log(address)

    //busdContract = new binanceWeb3.eth.Contract(tokenAbi, busdTokenContractAddress);
    contract = new web3.eth.Contract(tokenAbi, tokenContractAddress);


    const result = await contract.methods.transfer(address, web3.utils.toWei(amount)).send({
        from: str
    }, (err, res) => {
        if (err) {}
    })

    if (result) {
        alert("Submit Transaction Details!")
    }
}

async function getAccountAddress() {
    try {
        const accounts = await web3.eth.getAccounts();
        //console.log(accounts[0]);
        return accounts[0];
    } catch (e) {}
}