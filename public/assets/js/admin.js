$(function () {
   $.ajax({
      url: ("./assets/js/admin.json"),
      success: function (result) {
         $.each(result, function (index, item) {
            console.log("index : " + index)
            // var img = document.createElement('img');
            //img.src = item.userId
            $(".ls_ls").append("<div class='list_rs_token'>" +
               "<div class='lisr_rs_itm'>" +
               //  "<div class='lisr_rs_itm'>"+

               "<p>" + item.qunatity + "</p>" +
               "</div>" +

               "<div class='lisr_rs_itm'>" +
               "<p>" + item.senderAddress + "</p>" +
               "</div>" +

               "<div class='lisr_rs_itm'>" +

               "<p>" + item.transactionId + "</p>" +
               "</div>" +

               "<div class='lisr_rs_itm'>" +

               "<p>" + item.Email + "</p>" +
               "</div>" +


               "</div>"


            );
         });
      }
   });
});

//////////////////////////
$(function () {
   $.ajax({
      url: ("./assets/js/recqr.json"),
      success: function (result) {
         $.each(result, function (index, item) {
            console.log("index : " + index)
            // var img = document.createElement('img');
            //img.src = item.userId
            $(".rec_address").append("<div class='rec_header'>" +
               "<p>" + 'Receiver Address' + "</p>" +
               "<p class='mt-2' id='copyValue'>" + item.address + "<span onClick='copyAddress()'>" +
               "<i class='bi bi-clipboard-check'>" +
               "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clipboard-check' viewBox='0 0 16 16'>" +
               "<path fill-rule='evenodd' d='M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z'/>" +
               "<path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z'/>" +
               "<path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z'/>" +
               "</svg>" +
               "</i>" +
               "</span>" +
               "</p>" +
               "</div>" +
               "<div id='qrcode'>" + "</div>" +

               "</div>"


            );
            var qr = new QRCode(document.getElementById("qrcode"), item.address);
         });
      }
   });
});