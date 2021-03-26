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

/////////////////////////////////////////
$('.img1 .bnt').on('click', function(){    
    if (!$('.gall1').hasClass('on')) {
        $('.gall1').css({
            right: '100px',
            cursor: 'pointer'
        }).addClass('on')
    } else {
        $('.gall1').css({
            right: '-800px',
            cursor: 'pointer'
        }).removeClass('on')
    }
})

$('.img2 .bnt').on('click', function(){    
    if (!$('.gall2').hasClass('on')) {
        $('.gall2').css({
            right: '100px',
            cursor: 'pointer'
        }).addClass('on')
    } else {
        $('.gall2').css({
            right: '-800px',
            cursor: 'pointer'
        }).removeClass('on')
    }
})

$('.img3 .bnt').on('click', function(){    
    if (!$('.gall3').hasClass('on')) {
        $('.gall3').css({
            right: '100px',
            cursor: 'pointer'
        }).addClass('on')
    } else {
        $('.gall3').css({
            right: '-800px',
            cursor: 'pointer'
        }).removeClass('on')
    }
})

$('.img4 .bnt').on('click', function(){    
    if (!$('.gall4').hasClass('on')) {
        $('.gall4').css({
            right: '100px',
            cursor: 'pointer'
        }).addClass('on')
    } else {
        $('.gall4').css({
            right: '-800px',
            cursor: 'pointer'
        }).removeClass('on')
    }
})


/////////////////////////////////////////

// var linum;
// $('.gallery li').on('click', function(e){
//     e.preventDefault()
//     linum = $(this).index()
//     var src = $(this).find('img').attr('src')
//     var alt = $(this).find('img').attr('alt')

//     $('body').append('<div class="outbox"><div class="inbox"></div></div>')
//     $('.outbox').css({
//         position:'fixed', top:0, left:0, right:0, bottom:0,
//         zIndex:'999999', background:'rgba(0,0,0,0.8)'
//     })
//     $('.inbox').css({
//         position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'
//     })
//     .append(`<img src="${src}" alt="${alt}"></a>`)
//     .append('<button class="close"><i class="fas fa-times-circle"></i></button>')
//     .append('<button class="arrow prev"><i class="fas fa-angle-left"></i></button><button class="arrow next"><i class="fas fa-angle-right"></i></button>')
//     $('.inbox .close').css({
//         position:'absolute', top:'-10px', right:'-10px',
//         background:'none', border:'none', fontSize:'40px', color:'#fff'
//     })
//     $('.inbox .prev').css({
//         position:'absolute', top:'50%', left:'50%', marginLeft:'-430px', marginTop:'-20px',
//         background:'none', border:'none', fontSize:'70px', color:'#fff'
//     })
//     $('.inbox .next').css({
//         position:'absolute', top:'50%', right:'50%', marginRight:'-430px', marginTop:'-20px',
//         background:'none', border:'none', fontSize:'70px', color:'#fff'
//     })
// })

// $('body').on('click', '.inbox .close, .outbox', function(){
//     $('.outbox').remove()
// })

// $('body').on('click', '.inbox', function(e){
//     e.stopPropagation()
// })

// function gallery(indexnum) {
//     var src = $('.gallery li').eq(indexnum).find('img').attr('src')
//     var alt = $('.gallery li').eq(indexnum).find('img').attr('alt')
//     $('.inbox').find('img').attr({
//         src:src,
//         alt:alt
//     })
// }

// $('body').on('click', '.inbox .next', function(){
//     linum++
//     if (linum === $('.gallery li').length) {
//         linum = 0
//     }
//     gallery(linum)
// })

// $('body').on('click', '.inbox .prev', function(){
//     linum--
//     if (linum<0) {
//         linum = 8
//     }
//     gallery(linum)
// })


// 봄
var linum1;
var linum;
$('.gall1 li').on('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    linum1 = $(this).index()
    linum = 'gall1'
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
        position:'absolute', top:'50%', left:'50%', marginLeft:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
})

function gall1(indexnum) {
    var src = $('.gall1 li').eq(indexnum).find('img').attr('src')
    var alt = $('.gall1 li').eq(indexnum).find('img').attr('alt')
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

// 여름
var linum2;
$('.gall2 li').on('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    linum2 = $(this).index()
    linum = 'gall2'
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
        position:'absolute', top:'50%', left:'50%', marginLeft:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
})

function gall2(indexnum) {
    var src = $('.gall2 li').eq(indexnum).find('img').attr('src')
    var alt = $('.gall2 li').eq(indexnum).find('img').attr('alt')
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

// 가을
var linum3;
$('.gall3 li').on('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    linum3 = $(this).index()
    linum = 'gall3'
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
        position:'absolute', top:'50%', left:'50%', marginLeft:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
})

function gall3(indexnum) {
    var src = $('.gall3 li').eq(indexnum).find('img').attr('src')
    var alt = $('.gall3 li').eq(indexnum).find('img').attr('alt')
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

// 겨울
var linum4;
$('.gall4 li').on('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    linum4 = $(this).index()
    linum = 'gall4'
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
        position:'absolute', top:'50%', left:'50%', marginLeft:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-430px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
})

function gall4(indexnum) {
    var src = $('.gall4 li').eq(indexnum).find('img').attr('src')
    var alt = $('.gall4 li').eq(indexnum).find('img').attr('alt')
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}


$('body').on('click', '.inbox .close, .outbox', function(){
    $('.outbox').remove()
})

$('body').on('click', '.inbox', function(e){
    e.stopPropagation()
})

$('body').on('click', '.inbox .next', function(){
    switch(linum) {
        case 'gall1' : linum1++; if (linum1 === $('.gall1 li').length) { linum1 = 0 }; gall1(linum1); break;
        case 'gall2' : linum2++; if (linum2 === $('.gall2 li').length) { linum2 = 0 }; gall2(linum2); break;
        case 'gall3' : linum3++; if (linum3 === $('.gall3 li').length) { linum3 = 0 }; gall3(linum3); break;
        case 'gall4' : linum4++; if (linum4 === $('.gall4 li').length) { linum4 = 0 }; gall4(linum4); break;
    }
})

$('body').on('click', '.inbox .prev', function(){
    switch(linum) {
        case 'gall1' : linum1--; if (linum1 < 0) { linum1 = 2 }; gall1(linum1); break;
        case 'gall2' : linum2--; if (linum2 < 0) { linum2 = 2 }; gall2(linum2); break;
        case 'gall3' : linum3--; if (linum3 < 0) { linum3 = 2 }; gall3(linum3); break;
        case 'gall4' : linum4--; if (linum4 < 0) { linum4 = 2 }; gall4(linum4); break;
    }
})



})(jQuery)

