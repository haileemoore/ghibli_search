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
                console.log(data);
          }
        const $data = data
        // console.log(data);

          for (let i =0; i < userInput; i++) {
            const $table = $('<table>')
            const $th = $('<th>')
            const $tr = $('<tr>')
            const $td = $('films').html(data[i].films);
            const $td1 = $('people').html(data[i].people);
            const $td2 = ('locations').html(data[i].locations);
            const $td3 = $('species').html(data[i].species);
            const $td4 = $('vehicles').html(data[i].vehicles);
            $table.append($td, $td1, $td2, $td3, $td4)
            $th.append($td, $td1, $td2, $td3, $td4)

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
