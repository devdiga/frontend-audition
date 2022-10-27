import { getPost } from "../provider/placeholderProvider";

let page = 1

var myDiv = document.getElementById('container');

myDiv.addEventListener("scroll", myPageScroll);

function myPageScroll() {
  const isListView = myDiv.className === "container-list";
  var myScrollTop = myDiv.scrollTop;

  var myScrollHeight = myDiv.scrollHeight;

  var diff = myScrollHeight - myScrollTop;

  var height = myDiv.clientHeight;

  if (diff == height) {
    page++
    getPost(page, isListView)
  }
}