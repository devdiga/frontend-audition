import './layout/photoCard.css';

export default function PhotoCard(item)
{
    const img = document.createElement('img');
    img.src = item.url;
    img.classList = 'img'

    const txt = document.createElement('div');
    txt.innerHTML = item.title;
    txt.className = 'title';

    const id = document.createElement('div');
    id.innerHTML = item.id;
    id.className = 'id';

    const card = document.createElement('div');
    card.className = 'photo-card';
    card.appendChild(img);
    card.appendChild(id);
    card.appendChild(txt);

    return card;
}