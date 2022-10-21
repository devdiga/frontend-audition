export default function filterPhotos(photoTitle,search){

    let filter = new RegExp(search, 'i')

    if(!filter.test(photoTitle.innerText)){
        photoTitle.parentElement.style.display = 'none';
    } else {
        photoTitle.parentElement.style.display = 'block';
    }
}
