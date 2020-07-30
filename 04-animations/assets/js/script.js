// Doc jQuery pour afficher et masquer les blocks 1 et 2

// Ciblage des noeuds HTML
// --

// Les boutons
var btnOpen1 = $('#btnOpenBlock1');
var btnClose1 = $('#btnCloseBlock1');
var btn2 = $('#btnBlock2');

var btnOpen1_fx = $('#btnOpenBlock1_fx');
var btnClose1_fx = $('#btnCloseBlock1_fx');
var btn2_fx = $('#btnBlock2_fx');

var btn2_fx_stop = $('#btnBlock2_fx_stop');

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




// Actions avec effets
// --

// Affiche le block1
btnOpen1_fx.on('click', function(){
    block1.fadeIn();
});

// Masque le block1
btnClose1_fx.on('click', function(){
    block1.fadeOut(); // 500 ms
    // block1.fadeOut(5000);
    // block1.fadeOut("slow"); // 800 ms
    // block1.fadeOut("fast"); // 300 ms
});


// Affiche ou Masque le block2, selon l'état du block2
btn2_fx.on('click', function(){
    block2.fadeToggle();
});


// Animations avec effets + stop
// Affiche ou Masque le block2, selon l'état du block2
btn2_fx_stop.on('click', function(){
    block2.stop().fadeToggle(3000);
});