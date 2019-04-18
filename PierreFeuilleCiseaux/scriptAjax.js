$(document).ready(function () {


    $("#boutton").click(function () {
        alert("la connexion est établie");

        $.ajax({
            type: "GET",
            url: "https://ghibliapi.herokuapp.com/films",
            dataType: "html",  // Le type de données à recevoir, ici, du HTML.
            success: function (data, status) {
                console.log(data);
            }
        });

    });

});

