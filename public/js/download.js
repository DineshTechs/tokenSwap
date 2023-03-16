var jsonData;
const downloadData = async () => {
    const url = apiUrl + "/user/getRequests"

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    response.json().then(data => {
        jsonData = data.message
        //console.log(data)
        if (data.status == "ok") {
            if (data.message) { // submitted and verified
                //////////////////
                console.log(data.message)
                /////////////////
                for (var i = 0; i < data.message.length; i++) {
                    $(".ls_ls").append("<div class='list_rs_token'>" +
                        "<div class='lisr_rs_itm'>" +
                        //  "<div class='lisr_rs_itm'>"+

                        "<p>" + data.message[i].quantity + "</p>" +
                        "</div>" +
                        "<div class='lisr_rs_itm'>" +
                        "<p>" + data.message[i].receiverAddress + "</p>" +
                        "</div>" +

                        "<div class='lisr_rs_itm'>" +
                        "<p>" + data.message[i].senderAddress + "</p>" +
                        "</div>" +

                        "<div class='lisr_rs_itm'>" +


                        "<a target='_blank' href='https://bscscan.com/tx/" + data.message[i].transactionId + "'>" + data.message[i].transactionId + "</a>" +
                        "</div>" +

                        "<div class='lisr_rs_itm'>" +

                        "<p>" + data.message[i].Email + "</p>" +
                        "</div>" +

                        "<div class='lisr_rs_itm'>" +

                        "<p>" + data.message[i].status + "</p>" +
                        "</div>" +
                        "<div class='lisr_rs_itm'>" +

                        "<button onClick='updateStatus(" + i + ")'>" + 'Update' + "</button>" +
                        "</div>" +



                        "</div>"


                    );
                }
            }
        } else {
            swal.fire(data.message)
        }
    });

}

downloadData()


const updateStatus = async (id) => {
    //console.log(id)

    const url = apiUrl + "/user/updateStatus"
    //console.log(jsonData)

    const data = {
        "id": jsonData[id]._id
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    //
    console.log(data)

    response.json().then(data => {
        console.log(data)

        if (data.status == "ok") {
            swal("Updated!")
        } else {
            swal(data.message)
        }
    });

}