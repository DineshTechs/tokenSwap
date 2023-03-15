const checktransaction = async (hash, callback) => {
    await web3.eth.getTransaction(hash, (err, res) => {
        if (err) {
            callback(err, undefined)
        } else {
            console.log(res)
            callback(undefined, res)
        }
    })
}


const uploadData = async () => {
    //alert("hi")
    const qty = document.getElementById("qty").value
    const sender = document.getElementById("sender").value
    const tx = document.getElementById("transId").value
    const email = document.getElementById("email").value
    const receiver = document.getElementById("receiver").value

    if (web3) {
        await checktransaction(tx, (err, res) => {
            if (err) {
                console.log(err)
                swal("Invalid transaction hash!")
            } else {
                console.log(res)
            }
        })
    } else {
        return swal("Connect Wallet!")
    }


    const url = apiUrl + "/user/addRequest"

    const data = {
        "Email": email,
        "transactionId": tx,
        "quantity": qty,
        "senderAddress": sender,
        "receiverAddress": receiver
    }
    console.log(data)
    //console.log(url)
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    //


    response.json().then(data => {
        console.log(data)

        if (data.status == "ok") {
            swal("Transaction Details submitted!")
        } else {
            swal(data.message)
        }
    });

}