export default function createModals() {
    let photos =  document.querySelectorAll(".photos");
    photos.forEach(photo => {
        photo.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(event.target.attributes[0].value)
        })
    })
}

function openModal(event) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-image").setAttribute("src", event)
}

// Fechamento do Modal com a imagem.
(function() {
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    })
 }) ()