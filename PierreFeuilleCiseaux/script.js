//je créé mes variables 

$(document).ready(function () {
    var $pseudo = $('#pseudo'),
        $pseudo2 = $('pseudo2'),
        $envoi = $('envoi'),
        $reset = $('rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');


    //j'écoute l'évenement keyup sur les champ
    $champ.keyup(function () {
        if ($(this).val().length < 4) { // si la chaîne de caractères est inférieure à 4
            $(this).css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
        else {
            $(this).css({ // si tout est bon, on le rend vert
                borderColor: 'green',
                color: 'green'
            });
        }
    });

    //je crée ma premiere fonction verifier dont le paramettre est la classe champ
    function verifier(champ) {
        if (champ.val() == "") { // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
    }

    //j'écoute l'évenement click sur l'envoi
    $envoi.click(function (e) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($pseudo2);

    });

    //j'écoute l'évenement click sur le reset
    $reset.click(function () {
        $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
            borderColor: '#ccc',
            color: '#555'
        });
        $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
    });

});

