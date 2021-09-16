console.log("In the app.js")
let i = 0;
let city = "London";
const description = [];

if(description.length === 0){
  document.getElementById("noData").innerHTML = "NO Data";
} 


function getWeather(){
  
    i += 1
    if(i > 4){
        i = i%4;
    }
    console.log(i)
    if(i === 1) city = "London";
    if(i === 2) city = "New York";
    if(i === 3) city = "Los Angeles";
    if(i === 4) city = "Las Vegas";

    fetch("https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname="+city)
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(myData => {
     console.log(myData);
     description.push(myData)
     currData = myData;
     var table = document.getElementById("myTable");
     var row = table.insertRow(i+1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
    
   
     var date_current = new Date()
     console.log(date_current)
     console.log((new Date() - new Date(myData.date_and_time))/(1000*3600*24))

     cell1.innerHTML = city;
     cell2.innerHTML = myData.description;
     cell3.innerHTML = myData.temp_in_celsius;
     cell4.innerHTML = myData.pressure_in_hPa;
     cell5.innerHTML = Math.trunc((new Date() - new Date(myData.date_and_time))/(1000*3600*24));
     
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  }); 

  if(i > 0){
    document.getElementById("noData").innerHTML = "";
  }
}

