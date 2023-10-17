const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const content = document.getElementById('content');
var icon = document.getElementById('mode');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*menu hamburguer*/
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

/*remover menu hamburguer ao clicar no conteúdo*/
content.addEventListener('click', () =>{
    if(navMenu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    }
});

/*link ativo menu de navegação*/
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

/*modo escuro/claro*/
icon.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        mode.classList = "bx bx-sun";
    } else{
        mode.classList = "bx bx-moon";
    }
}

/* efeitos ao atualizar a página */
window.sr = ScrollReveal({ reset: true });

sr.reveal('.name', {duration:2000});
sr.reveal('.img-port', {duration: 1000});
sr.reveal('.h2,.h3, .h4', {duration: 500});
sr.reveal('#icon-h', {duration: 500}); 

/*menu portfólio*/
jQuery(document).ready(function() {
        jQuery('#tab1').css('display', 'block');

        jQuery(".link-a").click(function(){
            var id = jQuery(this).attr("href");

            jQuery('.tab:not('+id+')').css('display', 'none');
                jQuery(id).css('display', 'block');
        }); 
    });

/* link ativo menu navegação portfólio*/     
$('.link-a').click(function(e) {
    $('.link-a').removeClass('active-port');
    $(this).addClass('active-port');
  });

