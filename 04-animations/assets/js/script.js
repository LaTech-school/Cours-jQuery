// Doc jQuery pour afficher et masquer les blocks 1 et 2

// Ciblage des noeuds HTML
// --

// Les boutons
var btnOpen1 = $('#btnOpenBlock1');
var btnClose1 = $('#btnCloseBlock1');
var btn2 = $('#btnBlock2');

// Les Blocks
var block1 = $('#block1');
var block2 = $('#block2');


// Actions
// --

// Affiche le block1
btnOpen1.on('click', function(){
    block1.show();
});

// Masque le block1
btnClose1.on('click', function(){
    block1.hide();
});


// Affiche ou Masque le block2, selon l'état du block2
btn2.on('click', function(){
    block2.toggle();
});