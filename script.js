// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.usa.gov/crime/fbi/sapi//api/agencies/byStateAbbr/CA?api_key=pXeeVfGKqnylJwoLZVlNFk99JXpHbrcUS9agJfOL', true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(office => {
      console.log(office.agency_name)
    })
  } else {
    console.log('error')
  }
}

request.send()

data.forEach(office => {
  // Create a div with a card class
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  // Create an h1 and set the text content to the film's title
  const h1 = document.createElement('h1')
  h1.textContent = office.agency_name

  // Append the cards to the container element
  container.appendChild(card)

  card.appendChild(h1)
})