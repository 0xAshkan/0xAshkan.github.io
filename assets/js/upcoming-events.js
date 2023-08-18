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

// generate event rows in a table
function generateEventRow(event) {
  const tableRow = document.createElement('tr');

  const eventDate = document.createElement('td');
  eventDate.textContent = new Date(event.start).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const eventTitle = document.createElement('td');
  eventTitle.textContent = event.title;

  const eventDescription = document.createElement('td');
  eventDescription.textContent = event.format + ' - ' + event.onsite;

  const eventWight = document.createElement('td');
  eventWight.textContent = event.weight;

  tableRow.appendChild(eventDate);
  tableRow.appendChild(eventTitle);
  tableRow.appendChild(eventDescription);
  tableRow.appendChild(eventWight);

  return tableRow;
}

// add events to the table
function displayUpcomingEvents(events) {
  const tableBody = document.getElementById('upcoming-events');

  events.forEach(event => {
    const tableRow = generateEventRow(event);
    tableBody.appendChild(tableRow);
  });
}

// Fetch and display upcoming events
fetchUpcomingEvents()
  .then(events => {
    displayUpcomingEvents(events);
  });
