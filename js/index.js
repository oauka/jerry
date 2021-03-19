(function($){


    $('#menu li').on('click', function(){
        var num = $(this).index()
        $('html').stop().animate({
            scrollLeft:ww*num
        }, 300)
    })
    
    var ww = $(window).width()
    $(window).on('resize', function(){
        ww = $(this).width()
        $('html').scrollLeft(0)
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
    })
    
    if ( $('html').scrollLeft() != 0 ) {
        $('html').animate({scrollLeft:0})
    }
   
    
    $('#wrap section').on('mousewheel', function(e, delta){
        var index = $(this).index()
    
        if (delta>0 && index>0) {
            $('html').stop().animate({
                scrollLeft : ww*(index-1)
            }, 300)
        } else if (delta<0 && index<$('#wrap section').length-1) {
            $('html').stop().animate({
                scrollLeft : ww*(index+1)
            }, 300)
        }
    })
    
    $(window).on('scroll', function(){
        var scl = $(this).scrollLeft() + ww/2
        if (scl<ww) {
            $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
        } else if (scl>=ww && scl<ww*2) {
            $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
        } else if (scl>=ww*2 && scl<ww*3) {
            $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
        } else {
            $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
        }
    
    })

    var linum;
$('.gallery li').on('click', function(e){
    e.preventDefault()
    linum = $(this).index()
    // var href = $(this).find('a').attr('href')
    var src = $(this).find('img').attr('src')
    var alt = $(this).find('img').attr('alt')
    $('body').append('<div class="outbox"><div class="inbox"></div></div>')
    $('.outbox').css({
        position:'fixed', top:0, left:0, right:0, bottom:0,
        zIndex:'999999', background:'rgba(0,0,0,0.8)'
    })
    $('.inbox').css({
        position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'
    })
    .append(`<img src="${src}" alt="${alt}"></a>`)
    .append('<button class="close"><i class="fas fa-times-circle"></i></button>')
    .append('<button class="arrow prev"><i class="fas fa-angle-left"></i></button><button class="arrow next"><i class="fas fa-angle-right"></i></button>')
    $('.inbox .close').css({
        position:'absolute', top:'-10px', right:'-10px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
    $('.inbox .prev').css({
        position:'absolute', top:'50%', left:'50%', marginLeft:'-330px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-330px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
})

$('body').on('click', '.inbox .close, .outbox', function(){
    $('.outbox').remove()
})

$('body').on('click', '.inbox', function(e){
    e.stopPropagation()
})

function gallery(indexnum) {
    // var href = $('.gallery li').eq(indexnum).find('a').attr('href')
    var src = $('.gallery li').eq(indexnum).find('img').attr('src')
    var alt = $('.gallery li').eq(indexnum).find('img').attr('alt')
    // $('.inbox').find('a').attr({href:href})
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

$('body').on('click', '.inbox .next', function(){
    linum++
    if (linum === $('.gallery li').length) {
        linum = 0
    }
    gallery(linum)
})

$('body').on('click', '.inbox .prev', function(){
    linum--
    if (linum<0) {
        linum = 11
    }
    gallery(linum)
})
  
    
    })(jQuery)
    
