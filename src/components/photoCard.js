import '../assets/photo-card.css';

function photoCard(item, isList = false) {
  const properties = {
    url: isList ? item.thumbnailUrl : item.url,
    title: isList ? item.id : item.title
  }

  const img = document.createElement('img');
  img.src = properties.url;
  img.id = item.id;
  const txt = document.createElement('div');
  txt.innerHTML = properties.title;
  txt.className = 'title';
  const card = document.createElement('div');
  card.className = 'photo-card';
  card.id = `photo-card-${item.id}`;
  card.appendChild(img);
  card.appendChild(txt);
  return card;
}

const addHTML = (item, clean = false, isList = false) => {
  if (clean) {
    container.innerHTML = ""
  }
  container.appendChild(photoCard(item, isList))
}

let items = []
export { addHTML, items };

