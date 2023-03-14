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
                        "<p>" + data.message[i].senderAddress + "</p>" +
                        "</div>" +

                        "<div class='lisr_rs_itm'>" +


                        "<a target='_blank' href='https://bscscan.com/tx/" + data.message[i].transactionId + "'>" + data.message[i].transactionId + "</a>" +
                        "</div>" +

                        "<div class='lisr_rs_itm'>" +

                        "<p>" + data.message[i].Email + "</p>" +
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