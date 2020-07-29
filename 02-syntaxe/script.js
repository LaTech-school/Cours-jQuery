// Syntaxe

// Faire appel à la librairie jQuery
// --

// ex: jQuery
// ex: jquery
// ex: $



// Ciblage d'un element
// -- 

// ex: $(selecteur)
// ex: $('*')                   Selecteur universel
// ex: $('#id')                 selecteur d'id
// ex: $('.class')              selecteur de classe
// ex: $('div')                 selecteur de type
// ex: $('[name=firstname]')    selecteur d'attribut
// ex: $(document)              selecteur d'objet
// ex: $('.enfant .frere')      Tous les .frere descendant de .enfant <div class="enfant"><div><div class="frere">
// ex: $('.enfant.frere')       Tous les .frere ET .enfant <div class="enfant frere">
// ex: $('.enfant, .frere')     Tous les .frere OU .enfant 
// ex: $('.enfant > .frere')    Tous les . frere descendant DIRECT de .enfant <div class="enfant"><div class="frere">



// Passage d'action
// --

// Getter : $(seleteur).action();
// Setter : $(seleteur).action(quelque_chose);

// Getter : $('#id').html(); recup le contenu html de <div id="id">
// Setter : $('#id').html("Hello");  inject du contenu HTML dans <div id="id">

// ex: $('#id').html("<strong>Hello</strong> World");
// ex: $('.red').css('background', "red");
// ex: $('.red').css({background: "red"});
