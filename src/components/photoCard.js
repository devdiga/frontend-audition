import '../assets/photo-card.css';
import '../assets/photo-list.css';

export default function photoCard(item) {
  const img = document.createElement('img');
  img.src = item.url;
  img.className = 'photos'
  const txt = document.createElement('div');
  txt.innerHTML = item.title.charAt(0).toUpperCase() + item.title.slice(1);
  txt.className = 'title';
  const card = document.createElement('div');
  card.className = 'photo-card';
  card.appendChild(img);
  card.appendChild(txt);
  return card;
}