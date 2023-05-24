const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if it is not valid
    }
    // Perform additional validation or processing here
});