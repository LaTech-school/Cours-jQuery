
// Déclaration de la liste des Héros
var heros = [
    {
        nickname: "Batman",
        firstname: "Bruce",
        lastname: "WAYNE",
        location: "Gotham",
        powers: ['Belt', 'Money']
    },
    {
        nickname: "SpiderMan",
        firstname: "Peter",
        lastname: "PARKER",
        location: "New York",
        powers: ['Web']
    },
    {
        nickname: "SuperMan",
        firstname: "Clark",
        lastname: "KENT",
        location: "New York",
        powers: ['Ice breath', 'lazer eyes', 'flight']
    },
    {
        nickname: "IronMan",
        firstname: "Tony",
        lastname: "STARK",
        location: "Malibu",
        powers: ['Money', 'Iron Armor', 'Megalomania']
    },
    {
        nickname: "Roger",
        firstname: "Roger",
        lastname: "TI'ZOT",
        location: "Lille",
        powers: ['PiconBière', 'Caus4\' comme cha !']
    },
];

// Démarrer le script lorsque le document est chargé
$(document).ready(function(){

    // Ciblage des noeuds HTML
    $ul = $('#heros');


    // Parcourir la liste des Heros, Pour chaque héro...

    // Syntaxe alternaive de each()
    // $.each(heros, function(index, hero){});
    $(heros).each(function(index, hero){
        
        // 1. Création de la balise <li> contenant un Héro
        $li = $('<li>');



        // 2. Création de la <div> contenant le nom du Hero
        // --

        // 2.A Création de la <div>
        $div_name = $('<div>');

        // 2.B Génération de la valeur de l'attribut ID
        $div_name_id = "hero-"+ (index <= 9 ? "0"+index : index);
        
        // 2.C Ajout d'un classe et ID sur la <div>
        $div_name.attr('id', $div_name_id);
        
        // 2.D Injection du Nom du Hero dans la <div>
        $div_name.html(hero.nickname);

        // 2.E Injection de la <div> dans la balise <li>
        $li.append($div_name);
        



        // 3. Création de la <div> contenant les infos du Hero
        // --


        // 4. Injection de la balise <li> dans la balise <ul id="heros"">
        $ul.append($li);

    });

});