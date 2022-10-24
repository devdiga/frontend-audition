import '../assets/photo-card.css';

function photoCard(item) {
  const img = document.createElement('img');
  img.src = item.url;
  const txt = document.createElement('div');
  txt.innerHTML = item.title;
  txt.className = 'title';
  const card = document.createElement('div');
  card.className = 'photo-card';
  card.appendChild(img);
  card.appendChild(txt);
  return card;
}
const addHTML = (item) => {
  container.appendChild(photoCard(item))
}
let items = []
export { addHTML, items };

