// console.log('test');
// API : https://ghibliapi.herokuapp.com

$(() => {
    // SET IMAGE START - CYCLE
    let currentImgIndex = 0;
    // console.log(currentImgIndex);
    // CAROUSEL LENGTH
    const numOfImages = $('.images-carousel').children().length - 1
    // console.log(numOfImages);

    // NEXT BUTTON
    $('.forward').on('click', () => {
        $('.images-carousel').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex < numOfImages) {
          currentImgIndex ++;
        } else {
          currentImgIndex = 0;
        }
        $('.images-carousel').children().eq(currentImgIndex).css('display', 'block')
    })

    $('.previous').on('click', () => {
      $('.images-carousel').children().eq(currentImgIndex).css('display', 'none')
      if (currentImgIndex > 0) {
        currentImgIndex --;
      } else {
        currentImgIndex = numOfImages;
      }
      $('.images-carousel').children().eq(currentImgIndex).css('display', 'block')
    })
  })


$(() => { // START JQUERY

  $('.form').on('click', (event) => {

    event.preventDefault(); // PREVENT IMMEDIATE PAGE REFRESH

    let userInput = $('input[type="text"]').val()
      // console.log(userInput);

    let link = `https://ghibliapi.herokuapp.com/${userInput}`
    // let linkFilms = `https://ghibliapi.herokuapp.com/films`
    // let linkPeople = `https://ghibliapi.herokuapp.com/people`
    // let linkLocations = `https://ghibliapi.herokuapp.com/locations`
    // let linkSpecies = `https://ghibliapi.herokuapp.com/species`
    // let linkVehicles = `https://ghibliapi.herokuapp.com/vehicles`

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
          // PUSH THE TITLES INTO li
            let title = object.title
            // console.log(title); // RETURNS ALL TITLES OF FILMS
            let people = object.name
            // console.log(people);
            let locations = object.name
            // console.log(locations);
            let species = object.name
            // console.log(species);
            let vehicles = object.name

          for (let i = 0; i < 1; i++) {
            const $liTitles = $('<li>').text(title)
            const $liPeople = $('<li>').text(people)
            const $liLocate = $('<li>').text(locations)
            const $liSpecies = $('<li>').text(species)
            const $liVehicles = $('<li>').text(vehicles)


            // IF USERINPUT === FILMS
            if (userInput === 'films') {
              $('.titles').append($liTitles)
              $('.people').hide()
              $('.locations').hide()
              $('.species').hide()
              $('.vehicles').hide()
            } else if (userInput === 'people') {
              // ELSE IF === PEOPLE
              $('.people').append($liPeople)
              $('.titles').hide()
              $('.locations').hide()
              $('.species').hide()
              $('.vehicles').hide()
            } else if (userInput === 'locations') {
              // ELSE IF === LOCATIONS
              $('.locations').append($liLocate)
              $('.titles').hide()
              $('.people').hide()
              $('.species').hide()
              $('.vehicles').hide()
            } else if (userInput === 'species') {
              // ELSE IF === SPECIES
              $('.species').append($liSpecies)
              $('.titles').hide()
              $('.people').hide()
              $('.locations').hide()
              $('.vehicles').hide()
            } else if (userInput === 'vehicles') {
              // ELSE IF === VEHICLES
              $('.vehicles').append($liVehicles)
              $('.titles').hide()
              $('.people').hide()
              $('.locations').hide()
              $('.species').hide()
            } // END OF IF..ELSE IF
          } // END OF FOR LOOP
        } // END OF FOR..OF LOOP

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
