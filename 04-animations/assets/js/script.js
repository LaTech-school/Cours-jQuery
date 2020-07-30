// Doc jQuery pour afficher et masquer les blocks 1 et 2

var btnOpen1 = $('#btnOpenBlock1');
var btnClose1 = $('#btnCloseBlock1');
var btn2 = $('#btnBlock2');

var block1 = $('#block1');
var block2 = $('#block2');



btnOpen1.on('click', function(){
    block1.show();
});

btnClose1.on('click', function(){
    block1.hide();
});

btn2.on('click', function(){
    block2.toggle();
});