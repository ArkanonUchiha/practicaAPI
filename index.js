let URL = 'https://api.datos.gob.mx/v1/calidadAire';

const API = new XMLHttpRequest();

API.open('GET', URL, true);
API.send();

API.onreadystatechange = function() {
  if(this.status == 200 && this.readyState == 4) {
    let datos = JSON.parse(this.responseText);
    let tbody = document.getElementById('tbody');

    console.log(datos.results);

    

    for(let item of datos.results){
      // for (var i = 0; i < datos.results.length; i++) { console.log(datos[i]); }

      console.log(item.stations);
      
      tbody.innerHTML += `<t>
      <td>${item._id}</td>
      </t>`;
    }

  




  }
}
