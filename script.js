// upcomming shows api
const BASE_URL = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
let items = document.querySelectorAll('.item');
let head = document.querySelectorAll('.head');
let place = document.querySelectorAll('.place');
let date = document.querySelectorAll('.date');
let weather = document.querySelectorAll('.weather');

// grid api
const apiUrl = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==';
let gridContainer=document.querySelector(".v1")
let currentPage=1;
let totalPages=5;
let isFetching=false;



const updateImage = async () => {
  let response = await fetch(BASE_URL);
  let data = await response.json();
  return data;
}

const setImagesFromAPI = async () => {
  let data = await updateImage();
  let events = data.events;
    
  for (let i = 0; i < 8; i++) {
    let h=events[i].eventName;
    if (i==2){
      h = h.slice(0, -9);
    }

    else if (i==4){
      h = "Tropical Music Festival"
    }
    head[i].innerHTML=h;

    let l = events[i].cityName;
    place[i].innerHTML=l;
    const d = events[i].date; 
    const dateObject = new Date(d);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    date[i].innerHTML = formattedDate;

    let t = events[i].weather;
    t = t.slice(0, -1);
    weather[i].innerHTML=`${t} °C | 42 Km`;
  }
}

setImagesFromAPI();


// second grid part api
async function fetchData(page){
  try{
    const response=await fetch(`${apiUrl}&page=${page}&type=upcoming`);
    if(!response.ok){
      throw new Error('Network response was not ok.')
    }
    const data = await response.json();
    return data;

  }catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function populateInitialGrid() {
  const data = await fetchData(currentPage);

  if (!data || !data.events || !Array.isArray(data.events)) {
    console.error('Events data is missing or not an array:', data);
    return;
  }

  data.events.forEach(event => {
    const gridItem = createGridItem(event);
    gridContainer.appendChild(gridItem);
  });
  currentPage++; 
}


function createGridItem(event){
  const item=document.createElement('div');
  item.classList.add('grid-item'); 

  const bgContainer=document.createElement('div');
  bgContainer.classList.add('background-container');
  item.appendChild(bgContainer); 

  const img=document.createElement('img');
  img.classList.add('background-container-image'); 
  bgContainer.appendChild(img);

  const date=document.createElement('div');
  date.classList.add('background-container-date'); 
  bgContainer.appendChild(date);

  const detailContainer=document.createElement('div');
  detailContainer.classList.add('detail-container');
  
  const detailOne=document.createElement('div');
  detailOne.classList.add('detail-one');
  detailContainer.appendChild(detailOne); 

  const detailTwo=document.createElement('div');
  detailTwo.classList.add('detail-two');

  const location=document.createElement('div');
  location.classList.add('detail-two-location');
  const temperature=document.createElement('div');
  temperature.classList.add('detail-two-temperature');

  detailTwo.appendChild(location);
  detailTwo.appendChild(temperature);

  detailContainer.appendChild(detailTwo);

  item.appendChild(detailContainer);


  // fetching background image
  const imgUrl = `${event.imgUrl}`;
  const startIndex = imgUrl.indexOf("/d/") + 3; 
  const endIndex = imgUrl.indexOf("/view"); 
  const idText = imgUrl.substring(startIndex, endIndex);
  img.src = `https://drive.google.com/thumbnail?id=${idText}`;

  
  // fetching background date
  const d=`${event.date}`;
  const dateObject = new Date(d);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);
  date.innerHTML=formattedDate;

  // fetching event heading
  let a = `${event.eventName}`;
  const words = a.split(' ');
  let result;

  if (words.length >= 4) {
      result = words.slice(0, 3).join(' ');
  }
  else{
      result = a;
  }
  a = result; 
  detailOne.innerHTML=a


  // fetching location
  const b = `<i class="fa-solid fa-location-dot fa-fw"></i> ${event.cityName}`;
  location.innerHTML=b;

  // fetching temperature
  let distanceKm=event.distanceKm.substring(0, 2);
  let temp=event.weather;
  let lastIndex = temp.lastIndexOf("C");
  temp=temp.slice(0, lastIndex) + temp.slice(lastIndex + 1);
  const c = `${temp} °C | ${distanceKm} km`;
  temperature.innerHTML=c;

  return item
}

async function populateGrid() {
  if (isFetching || currentPage > totalPages) return; // Stop fetching data after page 5
  isFetching = true;

  loadingSpinner.style.display = 'block'; // Show loading spinner

  const data = await fetchData(currentPage);

  if (!data || !data.events || !Array.isArray(data.events)) {
    console.error('Events data is missing or not an array:', data);
    isFetching = false;
    loadingSpinner.style.display = 'none';
    return;
  }

  data.events.forEach(event => {
    const gridItem = createGridItem(event);
    gridContainer.appendChild(gridItem);
  });

  currentPage++; // Move to the next page for infinite scroll
  isFetching = false;

  if (currentPage >= totalPages) {
    loadingSpinner.style.display = 'none'; // Hiding loading spinner after page 5
  }
}

populateInitialGrid();

gridContainer.addEventListener('scroll', () => {
  populateGrid();
});

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

// Event listener for scroll events on the container
gridContainer.addEventListener('scroll', scrollToBottom);



