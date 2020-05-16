// console.log('test');
// API : https://ghibliapi.herokuapp.com


$(() => { // START JQUERY

  $('button').on('click', (event) => {

    event.preventDefault(); // PREVENT IMMEDIATE PAGE REFRESH

    let userInput = $('input[type="text"]').val()
      // console.log(userInput);

    let link = `https://ghibliapi.herokuapp.com/${userInput}`
    let linkFilms = `https://ghibliapi.herokuapp.com/films`
    let linkPeople = `https://ghibliapi.herokuapp.com/people`
    let linkLocations = `https://ghibliapi.herokuapp.com/locations`
    let linkSpecies = `https://ghibliapi.herokuapp.com/species`
    let linkVehicles = `https://ghibliapi.herokuapp.com/vehicles`


    $.ajax(
      {
        url: link,
        type: 'GET',
        data: userInput
      }
    ).then(
        (data) => {
          // $('single-film-data').html(data.title);
          for (object of data) {

            let title = object.title
            // console.log(title); // RETURNS ALL TITLES OF FILMS
            // PUSH THE TITLES INTO li
            let people = object.linkPeople
            console.log(people);
          for (let i = 0; i < 1; i++) {
            const $li = $('<li>').text(title)
            $('.titles').append($li)

          }
        }
      },
      (error) => {
        console.log('Error: Ghibli not found');
      }
    ) // END AJAX
  }) // END BUTTON CLICK
}) // END JQUERY

// IF INPUT TYPE TEXT === TITLE, SHOW SINGLE FILM DATA SEARCHED BY TITLE
// ELSE IF TEXT === FILMS, SHOW ALL GHIBLI FILMS
// ELSE IF TEXT ===


// let titleArr = []
// titleArr.push(title)
// console.log(titleArr);
