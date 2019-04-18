$(document).ready(function () {

    var $pseudo = $('#pseudo'),
        $pseudo2 = $('#pseudo2'),
        $envoi = $("#envoi"),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

    $champ.keyup(function () {
        if ($(this).val().length < 4) { // si la chaîne de caractères est inférieure à 5
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



    $envoi.click(function (e) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($pseudo2);

    });

    //je crée ma fonction verifier dont le paramettre est la classe champ
    function verifier($champ) {
        if ($champ.val() == "") { // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            $champ.css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
    }

    $reset.click(function () {
        $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
            borderColor: '#ccc',
            color: '#555'
        });
        $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
    });

    function verifier(champ) {
        if (champ.val() == "") { // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
    }

    $envoi.click(function() {
        var tableauJoueurs = []; 
        var joueur1 = $pseudo.val();
        var joueur2 = $pseudo2.val();
        tableauJoueurs = [joueur1, joueur2];

        console.log(joueur1);
        console.log(joueur2);
        console.log(tableauJoueurs)

        $("#listRep").append(tableauJoueurs.forEach(element => {
            
            "<li>element</li>"
        }));
            
            
    })

    

});

//var pierre => 1 && <=32;
//var papier = slice(32,78);
//var cisceaux = slice (78, 101);


//je souhaite enregistré les données

//ouvrir une nouvelle page

//clicker sur un boutton chacun 
//le boutton envoi des chiffres en aléatoire
//si ca tombe sur les chiffres, afficher (display les images)
//la le jeux, pierre papier ciscaux