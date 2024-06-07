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

// Category and Genre Select
document.getElementById('searchButton').addEventListener('click', (event) => {
 // Create Variable

 event.preventDefault();

 let genreField = document.getElementById('genre')

 let categoryField = document.getElementById('category')



 //Sync Variable

 let genre = genreField.value
 let category = categoryField.value

 console.log(genre);

 document.getElementById('searchbar').value = genre + "" + category;


});
