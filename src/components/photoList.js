import "../assets/photo-list.css";

export default function photoList(item) {
  const img = document.createElement("img");
  img.src = item.thumbnailUrl;
  const txt = document.createElement("div");
  txt.innerHTML = item.title;
  txt.className = "title";
  const row = document.createElement("div");
  row.className = "photo-row";
  row.appendChild(img);
  row.appendChild(txt);
  return row;
}
