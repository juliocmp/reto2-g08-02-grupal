/**
 *   endpoint donde se va a consumir  la  API REST  DE ORACLE CLOUD
 * 
 * */


//const endpoint = "https://gf6861cce116dd6-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games/"
const endpoint = "https://gf6861cce116dd6-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games"
const etp = document.getElementById("informacion")
const btnnuevo = document.getElementById("guardar")
const btnver = document.getElementById("ver")
const btnact = document.getElementById("actualizar")
const btndel = document.getElementById("eliminar")

function peticionGET() {

    $.ajax({
        method: "GET",
        url: endpoint,
        success: function(data) {
            /**console.log(data.items) */
            leerJuegos(data.items)
            mostrarJuegos(data.items)
        },
        error: function(error) {
            console.log("Error al consumir Api Oracle Cloud")


        }

    });
}

function leerJuegos(games) {

    let cadena = ""

    games.forEach(games => {
        cadena += "<p>Id:" + games.id + "</p>" +
            "<p>Developer:" + games.developer + "</p>" +
            "<p>Minage:" + games.minage + "</p>" +
            "<p>Category_id:" + games.category_id + "</p>" +
            "<p>Name:" + games.name + "</p>"
    });
    console.log(etp)
    console.log(cadena)
    etp.innerHTML = cadena
}


function mostrarJuegos(games) {

    console.log("*********")

    games.forEach(
        games => {

            console.log("Id" + games.id)
            console.log("developer" + games.developer)
            console.log("Minage" + games.minage)
            console.log("Categoría " + games.category_id)
            console.log("Nombre " + games.name)
            console.log("*********")
        }

    )

}

function peticionPOST() {
    /**Creamos  objeto */
    const data_games = {
            id: 100,
            developer: "CELULAR",
            minage: 10,
            category_id: 1,
            name: "IPHONE"
        }
        /**let data = JSON.stringify(data_games)  */
    let datasend = JSON.stringify(data_games)

    $.ajax({
        method: "POST",
        url: endpoint,
        data: datasend,
        dataType: "json",
        contentType: "application/json",
        complete: function(response) {
            console.log(response.status)
        },
        error: function(error) {
            //console.log("Error al consumir Api Oracle Cloud")
        }

    });

}

function peticionPUT() {
    /**Creamos  objeto */
    const data_games = {
            id: 100,
            developer: "yo y otros y PAOLA",
            minage: 10,
            category_id: 1,
            name: "carros y  bicicletas y DULCES MEXICANOS"
        }
        /**let data = JSON.stringify(data_games)  */
    let datasend = JSON.stringify(data_games)

    $.ajax({
        method: "PUT",
        url: endpoint,
        data: datasend,
        dataType: "json",
        contentType: "application/json",
        complete: function(response) {
            /**console.log("Actualizó Registro !!!!")  */
            console.log(response.status)
        },
        error: function(error) {
            console.log(error)
        }
    });

}

function peticionDELETE() {
    /**Creamos  objeto */
    const data_games = {
            id: 100
        }
        /**let data = JSON.stringify(data_games)  */
    let datasend = JSON.stringify(data_games)

    $.ajax({
        method: "DELETE",
        url: endpoint,
        data: datasend,
        dataType: "JSON",
        contentType: "application/json",
        complete: function(response) {
            console.log("Borró Registro !!!!")
                /**console.log(response.status)*/
        },
        error: function(error) {
            console.log(error)
        }


    });

}



/**peticionPUT()
peticionDELETE()
peticionGET() */
/**  peticionPOST() 
peticionGET() * /


/** 
 * * { "id": 1, "developer": "Microsoft", "minage": 10, "category_id": 1, "name": "Crazy Toons" }
 * */
btnnuevo.addEventListener("click", (e) => {
    e.preventDefault()
    peticionPOST()
})
btnact.addEventListener("click", (e) => {
    e.preventDefault()
    peticionPUT()
})
btndel.addEventListener("click", (e) => {
    e.preventDefault()
    peticionDELETE()
})

btnver.addEventListener("click", (e) => {
    e.preventDefault()
    peticionGET()
})