const form = document.querySelector("#picURL");
const text = document.querySelector("#returnText");
const language = document.querySelector("#returnLanguage");

let myHeaders = new Headers();
myHeaders.append("apikey", "FD00cuR4jklrGZnhXOHcn4GDFBlkhcJ9");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const URL = form.elements.query.value;
    axios.get(`https://api.promptapi.com/image_to_text/url?url=${URL}`, { headers: { "apikey": "FD00cuR4jklrGZnhXOHcn4GDFBlkhcJ9" } })
        .then(textData => {
            text.innerText = textData.data.all_text;
            strLang = textData.data.lang.toUpperCase()
            language.innerText = strLang;
        })
        .catch(error => console.log('error', error));

    form.elements.query.value = "";
})

