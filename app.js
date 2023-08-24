const genreInput = document.getElementById('genre-input');
const searchForm = document.getElementById('search-form');

// Add an event listener to the form's submit event
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the value from the input field
  const genre = genreInput.value;

  // Now you can use the "genre" value for your search or other actions
  console.log('Selected genre:', genre);
});