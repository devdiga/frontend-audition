export default function filterPhotos(search) {

    let filter = new RegExp(search, 'i')

    let photoTitles = document.querySelectorAll(".title");

    photoTitles.forEach(element => {

        if (!filter.test(element.innerText)) {
            element.parentElement.style.display = 'none';
        } else {
            if (element.parentElement.tagName == "LI"){
                element.parentElement.style.display = 'flex';    
            } else {
                element.parentElement.style.display = 'block';
            }            
        }
    });
}
