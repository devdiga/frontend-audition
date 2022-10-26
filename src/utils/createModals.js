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
    document.getElementById("modal-image").setAttribute("src", event.target.attributes[0].value)
    document.getElementById("modal-title").innerText = event.target.nextElementSibling.innerText;
}

// Fechamento do Modal com a imagem.
(function() {
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    })
 }) ()

