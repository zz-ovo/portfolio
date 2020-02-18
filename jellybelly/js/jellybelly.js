$("document").ready(function(){
//    alert("check");
    var $nav = $("#main .nav"),
        i = 0,
        d = 0,
        $indicator = $(".contents2 .indicator li"),
        indi_leng = $indicator.length -1,
        $slide = $(".contents2"),
        $slide_item = $(".contents2 .slide"),
        timer = setInterval(auto_play,3000);
//        auto_play = setInterval(function () {
//             i++;
//             if (i > leng) 
//                 i = 0;
//             $slide_item
//                 .stop()
//                 .animate({
//                     left: "-100" * i + "%"
//                 }, 1000)
//         }, 2000)
        
    
    //#main구간
    wow = new WOW({
        mobile: true
    })
    wow.init();

    //submenu down
    $(".menu").hover(function(){
        // mouseover
        $nav.css("background-color","#fff").css("height","400px").css("transition","all 1s");
    }, function(){
        // mouseout
        $nav.css("background-color","").css("height","").css("transition","0.5s");
    })
    
    //scroll event
   $(window).scroll(function(){
       var pos = $(window).scrollTop();
       if(pos >= 500){
//            alert(pos)
           $(".nav").addClass("fixed").find("a").css("color","#000"),
           $("#main .nav .menu").css("padding","0"),
            $("#main .nav .menu ul li").eq(2).css("width","80px");
           
//scroll top 되었을때 hover event 원래대로 돌아오게 만들기
            $(".menu").hover(function(){
                // mouseover
                $(".nav").css("background-color","").css("height","");
            },function(){
            })
           
       }else{

           $(".nav").removeClass("fixed").find("a").css("color",""),
           $("#main .nav .menu").css("padding",""),
           $("#main .nav .menu ul li").eq(2).css("width","");
           
           
           $(".menu").hover(function(){
            // mouseover
            $(".nav").css("background-color","#fff").css("height","400px").css("transition","all 1s");
        }, function(){
            // mouseout
            $(".nav").css("background-color","").css("height","").css("transition","0.5s");
        })


       }
   })
    
    //cahracter 호버시 애니메이션
    $(".aside_flavor .flavor img").hover(function(){
        $(".aside_flavor .flavor img").addClass("animated bounce infinite faster");
    },function(){
        $(".aside_flavor .flavor img").removeClass("animated bounce infinite faster");
    })
    
    //item 설명 올라오기
    $(".item").hover(function(){
        var h = $(this).index();
        $(".item_txt").eq(h).css("height","150px");
    }, function(){
        $(".item_txt").css("height","")
    })

    //contents2 slide, indicator
    

    function auto_play(){
        $slide_item.eq(i).stop().animate({
            left:"-100%"
        },1000)
        i++;

        if(i > indi_leng) i = 0
        $slide_item.eq(i).stop().css("left","100%").animate({
            left:"0"
        },1000)
        
        d=i;
        
        $indicator.removeClass("active").eq(i).addClass("active")
    }

    $indicator.eq(0).addClass("active")//첫번째 indicator 체크해놓기

    $indicator.click(function(){
        if( i < $(this).index()){
            $slide_item.eq(i).stop().animate({
                left:"-100%"
            },1200)
        }else if( i == $(this).index()){
            return;
        }else {
            $slide_item.eq(i).stop().animate({
                left:"100%"
            },1200)
        }
        i = $(this).index();
        if(i < d){
            if (i < 0) i = indi_leng;
            $slide_item.eq(i).stop().css("left","-100%").animate({
                left:"0"
            },1200)
        }else{
            if (i > indi_leng) i = 0;
            $slide_item.eq(i).stop().css("left","100%").animate({
                left:"0"
            },1200)
        }
        
        d=i;
        $indicator.removeClass("active").eq(i).addClass("active")
    })
    
    //indicator 호버시에 멈춤
    $indicator.hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer = setInterval(auto_play,3000);

    })
    
    // //aside modal
    // $(".aside_flavor .flavor").click(function(){
    //     var $modal = $(".aside_flavor_modal");
    //     $modal.slideDown();
    //     $("body").addClass('not_scroll');
    // })
    // $(".aside_flavor_modal span").click(function(){
    //     $(".aside_flavor_modal").slideUp();
    //     $("body").removeClass('not_scroll');
    // })

    $(".aside_flavor .flavor").click(function(e){
        e.preventDefault();
    })
    //top btn
    $(".aside_flavor .top").click(function(){
        $('html,body').stop().animate({
            scrollTop:0
        })
    })

})