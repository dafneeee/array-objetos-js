var radiologia = [
    {
        hora: "11:00",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rut: "9.878.782-1",
        prevision: "Fonasa",
    },
    {
        hora: "11:30",
        especialista: "Federico Subercaseux",
        paciente: "Pamela Estrada",
        rut: "15.345.241-3",
        prevision: "Isapre",
    },
    {
        hora: "15:00",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rut: "16.445.345-9",
        prevision: "Isapre",
    },
    {
        hora: "15:30",
        especialista: "Ana Maria Godoy",
        paciente: "Manuel Godoy",
        rut: "17.666.419-0",
        prevision: "Fonasa",
    },
    {
        hora: "16:00",
        especialista: "Patricia Suazo",
        paciente: "Ramón Ulloa",
        rut: "14.989.389-k",
        prevision: "Fonasa",
    }
];

var traumatologia = [
    {
        hora: "8:30",
        especialista: "Maria Paz Altuzarra",
        paciente: "Paula Sanchez",
        rut: "15.554.774-5",
        prevision: "Fonasa",
    },
    {
        hora: "10:00",
        especialista: "Raul Araya",
        paciente: "Angelica Navas",
        rut: "15.554.774-5",
        prevision: "Isapre",
    },
    {
        hora: "10:30",
        especialista: "Maria Arriagada",
        paciente: "Ana Klapp",
        rut: "15.554.774-5",
        prevision: "Isapre",
    },
    {
        hora: "11:00",
        especialista: "Alejandro Badilla",
        paciente: "Felipe Mardones",
        rut: "15.474.23-6",
        prevision: "Isapre",
    },
    {
        hora: "11:30",
        especialista: "Cecilia Budnik",
        paciente: "Diego Marre",
        rut: "16.554.741-K",
        prevision: "Fonasa",
    },
    {
        hora: "12:00",
        especialista: "Arturo Cavagnaro",
        paciente: "Cecilia Mendez",
        rut: "9.747.535-8",
        prevision: "Fonasa",
    },
    {
        hora: "12:30",
        especialista: "Andres Kanacri",
        paciente: "Marcial Suazo",
        rut: "11.254.785-5",
        prevision: "Isapre",
    }
]

var dental = [
    {
        hora: "8:30",
        especialista: "Andrea Zuñiga",
        paciente: "Marcela Retamal",
        rut: "11.123.425-6",
        prevision: "Isapre",
    },
    {
        hora: "11:00",
        especialista: "Maria Pia Zañartu",
        paciente: "Angel Muñoz",
        rut: "9.878.789-2",
        prevision: "Isapre",
    },
    {
        hora: "11:30",
        especialista: "Scarlett Witting",
        paciente: "Mario Kast",
        rut: "7.998.789-5",
        prevision: "Fonasa",
    },
    {
        hora: "13:00",
        especialista: "Francisco Von Teuber",
        paciente: "Karin Fernandez",
        rut: "18.887.662-K",
        prevision: "Fonasa",
    },
    {
        hora: "13:30",
        especialista: "Eduardo Viñuela",
        paciente: "Hugo Sanchez",
        rut: "17.665.461-4",
        prevision: "Fonasa",
    },
    {
        hora: "14:00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepulveda",
        rut: "14.441.281-0",
        prevision: "Isapre",
    }
]

console.log(radiologia)


document.write('<h1>Estadisticas Centro Médico Ñuñoa</h1> ');

//Cantidad de atenciones

document.write('<h2>Numero de Atenciones</h2> ');

document.write("<li>Cantidad de atenciones para radiologia:</li> " + "<span>" + radiologia.length + "</span>" + "<br>") //concatenar oldschool
document.write(`<li>Cantidad de atenciones para traumatologia:</li>   ${traumatologia.length} <br>`) //concatenar con ES6

document.write(`Cantidad de atenciones para dental:   ${dental.length} <br>`)

document.write("<h3>Radiologia</h3>")
document.write(`<li>Primera Atencion:</li> ${radiologia[0].paciente} - ${radiologia[0].rut} - ${radiologia[4].prevision}  | Última atención: ${radiologia[4].paciente} - ${radiologia[4].rut} - ${radiologia[4].prevision}` );

document.write("<h3>Traumatologia</h3>")
document.write(`<li>Primera Atencion:</li> ${traumatologia[0].paciente} - ${traumatologia[0].rut} - ${traumatologia[4].prevision}  | Última atención: ${traumatologia[4].paciente} - ${traumatologia[4].rut} - ${traumatologia[4].prevision}` );


document.write("<h3>Dental</h3>")
document.write(`<li>Primera Atencion:</li> ${dental[0].paciente} - ${dental[0].rut} - ${traumatologia[4].prevision}  | Última atención: ${dental[4].paciente} - ${dental[4].rut} - ${dental[4].prevision}` );