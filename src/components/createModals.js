export default function createModals() {
    let photos =  document.querySelectorAll(".photos");
    photos.forEach(photo => {
        photo.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(event)
        })
    })
}

function openModal(event) {
    document.getElementById("modal").style.display = "flex";
    showModalImage(event);
}

function showModalImage(event){
    let modalImage = document.getElementById("modal-image");
    let modalTitle = document.getElementById("modal-title");

    modalImage.setAttribute("src", event.target.attributes[0].value)
    modalTitle.innerText = event.target.nextElementSibling.innerText;

    if(document.querySelector("svg.list-mode").classList.contains("active")){
        modalImage.style.width = "150px"
    } else {
        modalImage.style.width = "600px"
    }  
}

// Fechamento do Modal
(function() {
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    })
 }) ()

