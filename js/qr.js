let qrPanel = document.querySelector("#qr-panel");
let qrInput = document.querySelector("#qr-input");
let genQRBtn = document.querySelector("#gen-qr-btn");

(function () {
	let qr = new QRious({
		element: qrPanel,
		value: "https://www.apple.com/fr/",
		size: 300
	});
})();

genQRBtn.addEventListener("click", () => {
	new QRious({
		element: qrPanel,
		value: qrInput.value,
		size: 300
	});

	qrInput.value = "";
});

