const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const content = document.getElementById('content');
var icon = document.getElementById('mode');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

content.addEventListener('click', () =>{
    if(navMenu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    }
});


icon.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        mode.classList = "bx bx-sun";
    } else{
        mode.classList = "bx bx-moon";
    }
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('.name', {duration:2000});
sr.reveal('.img-port', {duration: 1000});
sr.reveal('.h2,.h3, .h4', {duration: 500});
sr.reveal('#icon-h', {duration: 500}); 


jQuery(document).ready(function() {
        jQuery('#tab1').css('display', 'block');

        jQuery(".link-a").click(function(){
            var id = jQuery(this).attr("href");

            jQuery('.tab:not('+id+')').css('display', 'none');
                jQuery(id).css('display', 'block');
        }); 
    });

