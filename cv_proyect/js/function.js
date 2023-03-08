
document.getElementById("datos_personales").style.display = 'block';
document.getElementById("estudios").style.display = 'none';
document.getElementById("experiencia").style.display = 'none';
document.getElementById("objetivos").style.display = 'none';

document.getElementById('menu1').addEventListener('click', function () {
    document.getElementById("datos_personales").style.display = 'block';
    document.getElementById("estudios").style.display = 'none';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("objetivos").style.display = 'none';
});

document.getElementById('menu2').addEventListener('click', function () {
    document.getElementById("datos_personales").style.display = 'none';
    document.getElementById("estudios").style.display = 'block';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("objetivos").style.display = 'none';
});

document.getElementById('menu3').addEventListener('click', function () {
    document.getElementById("datos_personales").style.display = 'none';
    document.getElementById("estudios").style.display = 'none';
    document.getElementById("experiencia").style.display = 'block';
    document.getElementById("objetivos").style.display = 'none';
});

document.getElementById('menu4').addEventListener('click', function () {
    document.getElementById("datos_personales").style.display = 'none';
    document.getElementById("estudios").style.display = 'none';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("objetivos").style.display = 'block';
});

document.getElementById('estandar').addEventListener('click', function () {
    document.body.style.color = "#f5f5f5";
    document.body.style.backgroundColor = "cadetblue";
    document.getElementById('estandar').style.backgroundColor = "#005ac6";
    document.getElementById('claro').style.backgroundColor = "#0071f7";
    document.getElementById('oscuro').style.backgroundColor = "#0071f7";
});

document.getElementById('claro').addEventListener('click', function () {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "antiquewhite";
    document.getElementById('estandar').style.backgroundColor ="#0071f7";
    document.getElementById('claro').style.backgroundColor = "#005ac6";
    document.getElementById('oscuro').style.backgroundColor = "#0071f7";
});

document.getElementById('oscuro').addEventListener('click', function () {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    document.getElementById('estandar').style.backgroundColor ="#0071f7";
    document.getElementById('claro').style.backgroundColor = "#0071f7";
    document.getElementById('oscuro').style.backgroundColor = "#005ac6";
});


const collect = document.getElementsByClassName("redondeo");
for (let i = 0; i < collect .length; i++) {
    collect[i].addEventListener('mouseover', function(){
        collect[i].style.transform="scale(100%)";
        });
    collect[i].addEventListener('mouseout', function(){
        collect[i].style.transform="scale(80%)";
        });
};

/** tomando datos random de Random User Generator */
function getUsers() {
    fetch("https://randomuser.me/api/?results=1")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        const persona = (data.results[0]);
        console.log(persona); /** para ver en consola los datos que trae */
        document.getElementById("nameportada").innerHTML = persona.name.title + " " + persona.name.first + " " + persona.name.last;
        document.getElementById("name").innerHTML = "nombre: " + persona.name.title + " " + persona.name.first + " " + persona.name.last;
        document.getElementById("gender").innerHTML = "genero: " + persona.gender;
        document.getElementById("cell").innerHTML = "teléfono: " + persona.cell;
        document.getElementById("email").innerHTML = "email: " + persona.email;
        document.getElementById("location").innerHTML = "ubicación: " + persona.location.city + " - " + persona.location.state + " - " + persona.location.country;
        document.getElementById("fotoportada").src =  persona.picture.large;
    });
      
    }
  
getUsers();

const estudios = '{"estudios":{"prepa":"High School Music","uni":"Harvard University","title":"Arqueopaleontology Spacial"},"experiencia":{"w0":"1980-1995: FBI Agent","w1":"1995-2015: F1 Test Pilot","w2":"2015-2020: NASA Research Center"},"obje":"Grow professionally in the area of my responsibilities to lead a team that can dominate the galaxy, do not think that it is very difficult considering the capabilities of the human being and the current state of technological evolution."}';
        const obj = JSON.parse(estudios);
        console.log(obj);
        document.getElementById("prepa").innerHTML = obj.estudios.prepa;
        document.getElementById("uni").innerHTML = obj.estudios.uni;
        document.getElementById("title").innerHTML = obj.estudios.title;

        document.getElementById("w0").innerHTML = obj.experiencia.w0;
        document.getElementById("w1").innerHTML = obj.experiencia.w1;
        document.getElementById("w2").innerHTML = obj.experiencia.w2;

        document.getElementById("obje").innerHTML = obj.obje;