var ingredientsUrl = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c';
var instructionsUrl = "https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c";
var img = document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var id = 0 //this is going to be set to whatever the logic is going to be from the game data.
var apiUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&format=json'
var reviewsUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/reviews/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&filter=score:5&sort=score:asc&format=json&limit=5'
var gameFetch = document.getElementById('gameFetch');
var gameBtn = document.getElementById('btnId');



function getGameData() {
  fetch(apiUrl, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    format: 'json',
  })

    .then(function (response) {
      console.log(response)
      return response.json()

    })
    .then(function (data) {
      console.log(data)
      // var filterData = data.results.filter(function (game) {
      //   return game.aliases !== null
      // })
      // console.log(filterData)
    })
}
// getGameData()

function getReviews() {
  fetch(reviewsUrl, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    format: 'json',
  })

    .then(function (response) {
      console.log(response)
      return response.json()

    })
    .then(function (data) {
      console.log(data)
      var buttonClickHandler = function (event) {
        var dataGame = event.target.getAttribute('data-game');

        if (dataGame === "Metal Gear Solid 4") {
          var gameCreate = document.createElement('h2')
          var descCreate = document.createElement('p')
          gameCreate.textContent = data.results[0].game.name
          descCreate.textContent = data.results[0].deck
          gameCreate.appendChild(gameCreate);
          descCreate.appendChild(descCreate);
        }
      }
    }

    )
}


var gameId = 0
var id = 324694 //this is going to be set to whatever the logic is going to be from the game data.
var ingredientsUrl = 'https://api.spoonacular.com/recipes/' + id + '/information?includeNutrition=false&apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c';
var instructionsUrl = "https://api.spoonacular.com/recipes/" + id + "/analyzedInstructions?apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c";
var img = document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var buttonName = document.getElementById('buttonName');
var ingredients = document.getElementById("ingredientsList");
var recipeSteps = document.getElementById("steps");


function getApiIngredients(ingredientsUrl) {
  fetch(ingredientsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.title);
      img.src = data.image;
      for (var i = 0; i < data.extendedIngredients.length; i++) {
        var ingredientName = document.createElement('li');
        ingredientName.textContent = data.extendedIngredients[i].name;
        ingredients.append(ingredientName);
      }
    })
}
// getApiIngredients(ingredientsUrl);


function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
  fetch(instructionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.title);
      img.src = data.image;
      for (var i = 0; i < data.extendedIngredients.length; i++) {
        var ingredientName = document.createElement('li');
        ingredientName.textContent = data.extendedIngredients[i].name;
        ingredients.append(ingredientName);
      }
    })
}

function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
  fetch(instructionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data[0].steps.length; i++) {
        console.log(data[0].steps[i].step);
        var stepName = document.createElement('li');
        stepName.textContent = data[0].steps[i].step
        recipeSteps.append(stepName);
      }

    })
}
// getApi(instructionsUrl);

function idLogic(gameId) {
  id = gameId * 34796
}
gameBtn.addEventListener('click', getReviews)
buttonName.addEventListener("click", function () {
  console.log("This button works");
  getApi(instructionsUrl);
  getApiIngredients(ingredientsUrl);    //will display data, will probably also run the logic from converting value of game to that of a food" 
})
