fetch('http://localhost:3000/api/cameras')
    .then(response => response.json())
    .then(response => alert(JSON.parse(response)))
    .catch(error => alert("Erreur : " + error));

let promise = fetch('http://localhost:3000/api/cameras', {
    method: "GET", //ou POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
    },
    body: undefined, //ou string, FormData, Blob, BufferSource, ou URLSearchParams
    referrer: "about:client", //ou "" (pas de réferance) ou une url de l'origine
    referrerPolicy: "no-referrer-when-downgrade", //ou no-referrer, origin, same-origin...
    mode: "cors", //ou same-origin, no-cors
    credentials: "same-origin", //ou omit, include
    cache: "default", //ou no-store, reload, no-cache, force-cache, ou only-if-cached
    redirect: "follow", //ou manual ou error
    integrity: "", //ou un hash comme "sha256-abcdef1234567890"
    keepalive: false, //ou true pour que la requête survive à la page
    signal: undefined //ou AbortController pour annuler la requête
});

$(document).ready(function(){
    $.ajax({
        //L'URL de la requête
        url: 'http://localhost:3000/api/cameras',

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        /*On peut par exemple convertir cette réponse en chaine JSON et insérer
         * cette chaine dans un div id="res"*/
        .done(function(response){
            let data = JSON.stringify(response);
            $("div#res").append(data);
        })

        //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
        //On peut afficher les informations relatives à la requête et à l'erreur
        .fail(function(error){
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function(){
            alert("Requête effectuée");
        });
});