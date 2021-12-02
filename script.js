$(document).ready(function(){
    chargePage("pages/accueil.html")
$('nav a').click(function(e){
    page=$(this).attr('href');
    e.preventDefault();
    chargePage(page);

})

function chargePage(page){
$.ajax({
url : page,
cache : false,
success : function(html){
   affiche(html) 
},
error : function(){}

})

}
function affiche(data){
    $('.contenu').fadeOut(500, function(){
        $('.contenu').empty().append(data).fadeIn(500)
    })

}
})