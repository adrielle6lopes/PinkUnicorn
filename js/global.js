/* JavaScript do Tema do Site */

// Largura da tela para responsividade
var responsive = 640;

// Executar o programa quando o documento for carregado
$(document).ready(startApp);

// AplicaÃ§Ã£o principal
function startApp() {

    // Monitora cliques no botÃ£o do menu
    $(document).on('click', '#btnMenu', toggleMenu);

    // Monitora mudanÃ§a na largura
    $(window).resize(menuChange);

}

// Controla o menu
function toggleMenu() {

    // Testa o menu
    if ( $('#navLinks').is(':visible') )
        hideMenu('fast');
    else
        showMenu('fast');

    // Bloqueia a aÃ§Ã£o normal do link no HTML
    return false;

}

// Oculta o menu
function hideMenu(vel) {

    $('#navLinks').hide(vel);                                   // Oculta o menu
    $('#btnMenu').removeClass('active');                        // Adiciona a classe "active" ao botÃ£o
    $('#btnMenu').html('<i class="fas fa-fw fa-bars"></i>');    // Troca o Ã­cone
    // if ( vel == 0 )
    //     $('#menuModal').hide(vel);                              // Oculta o fundo do menu
    // else
    //     $('#menuModal').show(vel);                              // Oculta o fundo do menu
    // $('body').css('overflow','auto');                           // Mostra a barra de rolagem

}

// Mostra o menu
function showMenu(vel) {

    $('#navLinks').show(vel);                                   // Mostra o menu
    $('#btnMenu').addClass('active');                           // Adiciona a classe "active" ao botÃ£o
    $('#btnMenu').html('<i class="fas fa-fw fa-times"></i>');   // Troca o Ã­cone
    // if ( vel == 0 )                                             // Se nÃ£o estÃ¡ mudando de resoluÃ§Ã£o
    //     $('#menuModal').hide(vel);                              // Mostra o fundo do menu
    // else                                                        // SenÃ£o
    //     $('#menuModal').show(vel);                              // Oculta o fundo do menu
    // $('body').css('overflow','hidden');                         // Oculta a barra de rolagem

}

// Ajusta o menu conforme a largura da viewport
function menuChange() {

    if (window.innerWidth > responsive) {   // Se a viewport for maior que 'responsive':
        showMenu(0);                        // Mostra o menu responsivo
    } else {                                // SenÃ£o:
        hideMenu(0);                        // Oculta o menu responsivo
    }

}