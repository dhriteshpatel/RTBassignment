async function fetchAPI(){
    var h1 = document.createElement('h1');
    h1.innerHTML = "Fetching API...";
    h1.style.textAlign = 'center';
    document.body.appendChild(h1);
    var myData = await fetch("https://jsonplaceholder.typicode.com/photos")
                       .then((data) => data.json())
                       .then((data) => data);
    h1.style.display = "none";
    myData.map((item) => {
        var myDiv = document.createElement("div");
        myDiv.innerHTML = `<h2>${item.albumId}</h2>
                         <img src="${item.thumbnailUrl}">
                         <p>${item.title}</p>`;
        document.body.appendChild(myDiv);
    });
}
fetchAPI();