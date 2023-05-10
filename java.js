fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=da6c8f77&s=titanic")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores");
        res.Search.forEach(actual => {
                peli = document.createElement("li")
                peli.innerHTML = `Nombre: ${actual.Title} - Año: ${actual.Year}`
                valores.appendChild(peli)    
        })
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")

fetch("https://omdbapi.com/?apikey=da6c8f77&t=elite&Season=1&Episode=1")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores")
        console.log(res)
            peli = document.createElement("li")
            peli.innerHTML = `Nombre del capitulo: ${res.Title} - Episode: ${res.Episode}`
            valores.appendChild(peli)    
        }
    )
    .catch(err => console.error("error", err))
console.log("Fin consulta 2")