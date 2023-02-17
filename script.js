// const dataInput = document.getElementById('input')
const content = 'Hello Ppl'
const url = `http://api.qrserver.com/v1/create-qr-code/?data=${content}`;
const qrImg = document.getElementById('qrcode')
const btn = document.getElementById('btn')
// const link = `http(s)://api.qrserver.com/v1/read-qr-code/?fileurl=${encodeURIComponent(url)}`;
// function read() {
//     fetch(link)
//         .then((response) => response.json())
//         .then((data) => console.log(data[0].symbol[0].data));
// }

btn.onclick = (event) => {
    event.preventDefault()
    console.log('REQ MADE')
    fetch(url, { mode: "no-cors" })
        .then((response) => console.log(response.json()))
    qrImg.setAttribute('src', url)
}
