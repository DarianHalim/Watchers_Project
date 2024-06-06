function searchMovie() {
  let searchInput = document.getElementById('searchbar').value.toLowerCase();
  let listItems = document.querySelectorAll('#list li');

  listItems.forEach(function (item) {
      let text = item.textContent.toLowerCase();
      if (text.includes(searchInput)) {
          item.style.display = "list-item";
      } else {
          item.style.display = "none";
      }
  });
}