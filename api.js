

window.onload = () =>{
var div = document.createElement('div');
div.style.display = "flex";
div.style.justifyContent = "center";
document.body.appendChild(div);
var img = document.createElement("img");
img.id = "rotate"
img.src = "https://www.seekpng.com/png/detail/183-1834282_neon-round-circle-rounds-yuvarlak-frame-frames-border.png";
img.style.height = "100px";
img.style.width = "100px";
img.style.alignSelf = "center";
div.appendChild(img);
console.log(img);
var id  = setInterval(() =>{
    if(rotateDeg === 360){
        rotateDeg = 0;
    }
    document.getElementById("rotate").style.transform = `rotate(${rotateDeg}deg)`;
    rotateDeg += 20;
},40)
var data = [];
var rotateDeg = 20;
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/photos';
Http.open("GET", url);
Http.send();
Http.onreadystatechange= async(e)=>{
    data  = await Http.responseText;
    data = JSON.parse(data);
    clearTimeout(id);
    div.remove();
    data.map((item) => {
                var myDiv = document.createElement("div");
                myDiv.innerHTML = `<h2>${item.albumId}</h2>
                                 <img src="${item.thumbnailUrl}">
                                 <p>${item.title}</p>`;
                document.body.appendChild(myDiv);
            });

    }   
}





