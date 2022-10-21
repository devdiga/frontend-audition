export default function convertCardsToList(cards){
    let listPhotos = document.createElement("ul");

    cards.forEach((element,index) => {
        listPhotos.appendChild(conversor(element, index))
    })

    return listPhotos;
}

function conversor(card, index){
    let item = document.createElement("li");
    item.className = "photo-list-item";

    let id = document.createElement("span")
    id.innerText = `ID(${index+1})`

    let imgThumb = document.createElement("img");
    imgThumb.setAttribute("src", card.querySelector("img").getAttribute("src").replace(/\/600\//,"/150/"));

    let title = document.createElement("span");
    title.className = "title"
    title.innerText = card.querySelector("div").innerText;
    
    item.appendChild(id)
    item.appendChild(imgThumb)
    item.appendChild(title)

    return item;
}