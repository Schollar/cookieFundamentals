// Here we write the function that attaches to our button that removes the cookies and sends user back to selection page
function remove_selection() {
    Cookies.remove('chosen');
}
// Setting up an array of objects to use based on selection
var chosen_one = [
    {
        name: 'squirtle',
        img_src: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2MjY3Mzg3MDczNDcxNjc4/pokemon-squirtle-nicknames.jpg"
    },
    {
        name: 'charmander',
        img_src: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif"
    },
    {
        name: 'bulbasaur',
        img_src: "https://64.media.tumblr.com/172a6e167359e6b6832116ffac691e87/tumblr_inline_p7ja2uo4ZQ1qhvvv4_500.png"
    },

];

// getting the status of our cookie and saving it in a variable
var chosen_status = Cookies.get('chosen')
// getting our section from html which we will inject with the text of what the user has picked based on the cookie
var chosen_selection = document.getElementById('chosen_selection');
// start our conditional to check what button was picked and display the corresponding message
// We added in the array of objects above so depening on what was picked is what image will show
if (chosen_status === "Squirtle") {
    chosen_selection.innerText = "You have picked Squirtle! Nice!";
    var squirtle = document.createElement('img');
    squirtle.setAttribute('src', chosen_one[0].img_src);
    chosen_selection.appendChild(squirtle);
} else if (chosen_status === "Charmander") {
    chosen_selection.innerText = "You have picked Charmander! Great Choice!!";
    var charmander = document.createElement('img');
    charmander.setAttribute('src', chosen_one[1].img_src);
    chosen_selection.appendChild(charmander);
} else if (chosen_status === "Bulbasaur") {
    chosen_selection.innerText = "You have picked Bulbasaur. Meh";
    var bulbasaur = document.createElement('img');
    bulbasaur.setAttribute('src', chosen_one[2].img_src);
    chosen_selection.appendChild(bulbasaur);
} else {
    chosen_selection.innerText = "You must pick a pokemon!";
}


