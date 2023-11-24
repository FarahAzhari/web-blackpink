const responsive = { //responsive carousel
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){ /* Memanggil JQuery Object Document, ready function memanggil callback function di 'function' */
    
    $nav=$('.nav'); /* execute function di atas, membuat variabel dari JQuery, $ is JQuery object ('.nav') is element*/
    $toggleCollapse=$('.toggle-collapse');

    /*click event on toggle menu*/
    $toggleCollapse.click(function(){ //menu burger
        $nav.toggleClass('collapse');
    })

    //Modal Section
    //document.getElementsByClassName('.btn-modal').addEventListener('click', function(){
    $bgModal=$('.bg-modal');
    $btnModal=$('.btn-modal');
    $close=$('.close');
    
    $btnModal.click(function(){
        $bgModal.show('flex');
    })

    $close.click(function(){
        $bgModal.hide('flex');
    })

    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //click to scroll up
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    //AOS Instance
    AOS.init();
    
});