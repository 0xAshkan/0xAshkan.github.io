// Function to fetch upcoming events from CTFtime API
async function fetchUpcomingEvents() {
    try {
      const response = await fetch(window.origin+'/upcomings.txt');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to generate event cards
  function generateEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
  
    const eventDate = document.createElement('p');
    eventDate.classList.add('event-date');
    eventDate.textContent = new Date(event.start).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    const eventTitle = document.createElement('h3');
    eventTitle.textContent = event.title;
  
    const eventDescription = document.createElement('p');
    eventDescription.textContent = event.format + ' - ' + event.onsite;
  
    eventCard.appendChild(eventDate);
    eventCard.appendChild(eventTitle);
    eventCard.appendChild(eventDescription);
  
    return eventCard;
  }
  
  // Function to add events to the DOM
  function displayUpcomingEvents(events) {
    const upcomingEventsContainer = document.getElementById('upcoming-events');
  
    events.forEach(event => {
      const eventCard = generateEventCard(event);
      upcomingEventsContainer.appendChild(eventCard);
    });
  }
  
  // Fetch and display upcoming events
  fetchUpcomingEvents()
    .then(events => {
      displayUpcomingEvents(events);
    });
  