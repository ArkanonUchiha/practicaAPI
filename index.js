var URL = 'https://api.datos.gob.mx/v1/calidadAire';
const API = new XMLHttpRequest();
let btnDatos = document.getElementById('btnDatos');


function getDate() {
  API.open('GET', URL, true);
  API.send();
  
  API.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
      let datos = JSON.parse(this.responseText);
      let tbody = document.getElementById('tbody');
  
      // console.log(datos.results);
  
      for(let item of datos.results){
  
        // console.log(item);
        item.stations.forEach((val, index) => {
          console.log(val, index);
  
          tbody.innerHTML += `<tr>
          <td>${val.id}</td>
          <td>${val.location.lat}</td>
          <td>${val.name}</td>
          <td>${val.source_id}</td>
          </tr>`;
        });
      }
    }
  }
}



btnDatos.addEventListener('click', function() {
  getDate();
});
