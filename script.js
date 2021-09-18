const form = document.querySelector("#picURL");

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
    const response = await axios.get(`https://api.promptapi.com/image_to_text/url?url=${URL}`, requestOptions);
    makeText(response);
    form.elements.query.value = "";
})

const makeText = (response) => {
    const language = document.createElement("p")
    const returnText = document.createElement("p");
    language.body = response.show.lang
    returnText.body = response.show.all_text

    document.body.append(language);
    document.body.append(returnText);
}

