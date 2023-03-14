

function copyAddress() {
	var copyText = document.getElementById("copyValue");
	navigator.clipboard.writeText(copyText.innerText);
	swal("Copy", "success", {
		button: false});
	// alert("Copied Referral: " + copyText.value);
	swal({
		icon: "success",
		button: false,
		text: "COPY Address",
		timer: 1000,
	  });
	
}





