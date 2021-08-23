
async function fetchAPI(){
    var myData = await fetch("https://jsonplaceholder.typicode.com/photos")
                       .then((data) => data.json())
                       .then((data) => data);
    console.log(myData);
    h1.style.display = "none";
    myData.map((item) => {
        var div = document.createElement("div");
        div.style.border = "1px solid black";
        div.innerHTML = `<h2>${item.albumId}</h2>
                         <img src="${item.thumbnailUrl}">
                         <p>${item.title}</p>`;
        document.body.appendChild(div);
    })
}

fetchAPI();



var h1 = document.createElement("h1");
h1.innerHTML = "Fetching the API....";
h1.style.textAlign = "center";
document.body.appendChild(h1);



