// getting the status of our cookie and saving it in a variable
var chosen_status = Cookies.get('chosen')
// getting our section from html which we will inject with the text of what the user has picked based on the cookie
var chosen_selection = document.getElementById('chosen_selection');
// start our conditional to check what button was picked and display the corresponding message
if (chosen_status === "Squirtle") {
    chosen_selection.innerText = "You have picked Squirtle! Nice!";
} else if (chosen_status === "Charmander") {
    chosen_selection.innerText = "You have picked Charmander! Great Choice!!";
} else if (chosen_status === "Bulbasaur") {
    chosen_selection.innerText = "You have picked Bulbasaur. Meh";
} else {
    chosen_selection.innerText = "You must pick a pokemon!";
}

// Here we write the function that attaches to our button that removes the cookies and sends user back to selection page
function remove_selection() {
    Cookies.remove('chosen');
}