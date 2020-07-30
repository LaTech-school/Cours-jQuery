
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
        $div_name
            .addClass('hero_name')
            .attr('id', $div_name_id)
        ;
        
        // 2.D Injection du Nom du Hero dans la <div>
        $div_name.html(hero.nickname);

        // 2.E Injection de la <div> dans la balise <li>
        $li.append($div_name);
        



        // 3. Création de la <div> contenant les infos du Hero
        // --

        // 3.A Génération de la valeur de l'attribut ID
        $div_info_id = "hero-"+ (index <= 9 ? "0"+index : index) +"-data";

        // 3.B Création de la <div>
        // 3.C Ajoute de l'ID sur la <div>
        $div_info = $('<div>').attr('id', $div_info_id);

        // 3.D Convertion de la liste des pouvoirs en chaine
        $powers = hero.powers.join(", ");


        // 3.E Injection des infos du héro

        // 3.E Version 1 
        // Nom réél
        // $div_info.append(`Name : ${hero.firstname} ${hero.lastname}<br>`);
        // // Pouvoirs
        // $div_info.append(`Powers : ${$powers}<br>`);
        // // Ville
        // $div_info.append(`Location : ${hero.location}<br>`);

        // 3.E Version 2
        $div_info
            .append(`Name : ${hero.firstname} ${hero.lastname}<br>`)
            .append(`Powers : ${$powers}<br>`)
            .append(`Location : ${hero.location}<br>`)
        ;

        // 3.E Version 3
        // $info = `Name : ${hero.firstname} ${hero.lastname}<br>
        //         Powers : ${$powers}<br>
        //         Location : ${hero.location}<br>`;
        // $div_info.append($info);

        // 3.F Injection de la <div> dans la balise <li>
        $li.append($div_info);



        // 4. Injection de la balise <li> dans la balise <ul id="heros"">
        $ul.append($li);

    });

    $('.hero_name').on('click', function(){
        
        // 1. Récupération de l'id du héro cliqué
        $hero_name_id = $(this).attr('id');

        // 2. Génération de l'id de l'element contenant les infos du hero
        $hero_info_id = $hero_name_id+"-data";

        // 3. Ciblage de tous les elements contenant les infos des héros + fermeture des elements
        // tous les derniers element <div> des elements <li> trouvés dans <ul id="heros">
        $ul.find('li').find('div:last-child').stop().slideUp();

        // 4. Affichage des infos du Hero cliqué
        $('#'+$hero_info_id).slideDown();
        
    });

});