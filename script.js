const urlInput = document.getElementById('urlInput');
const sizeInput = document.getElementById('sizeInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrcodeDiv = document.getElementById('qrcode');


downloadBtn.style.display = 'none';

let qrCode;

generateBtn.addEventListener('click', () => {
    const url = urlInput.value;
    const size = parseInt(sizeInput.value);
    

    qrcodeDiv.innerHTML = '';


    qrCode = new QRCodeStyling({
        width: size,
        height: size,
        data: url,
        dotsOptions: {
            color: "#000000",
        },
        backgroundOptions: {
            color: "#ffffff",
        }
    });


    const qrcodeDisplay = new QRCodeStyling({
        width: 300,
        height: 300,
        data: url,
        dotsOptions: {
            color: "#000000",
        },
        backgroundOptions: {
            color: "#ffffff",
        }
    });

    qrcodeDisplay.append(qrcodeDiv); 
    

    downloadBtn.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {

    qrCode.download({
        name: "qrcode",
        extension: "png"
    });
});
