$("document").ready(function(){
    $(window).click(function(e){
        e.preventDefault();
    })
   
//    alert("check");
//  aside버튼 -> 스크롤 내려가면 나타남
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        // console.log(pos);
        if(pos >=500){
            $("aside").fadeIn();
        }else{
            $("aside").fadeOut();
        }
    })

    $("aside a").click(function(){
       $("html,body").animate({scrollTop:0},300)
    })

    $("header .banner-wrap .ad_banner .ad_close").click(function(){
        $("header .banner-wrap").toggle();
    })
    
  //호버 이벤트  
    $(".main-video").hover(function(){
        $(".main-content-visual").addClass("open");
        $(".mouseover,.main_video_text").stop().fadeOut();
    }, function(){
        $(".main-content-visual").removeClass("open");
        $(".mouseover,.main_video_text").stop().fadeIn();
    })
    
    $(".main-content-visual").hover(function(){
        
        $(".main-content-visual").addClass("open");
        
        if($(".main_video_text").is(":visible")){
            $(".mouseover,.main_video_text").hide();
        }else{
            $(".mouseover,.main_video_text").stop().fadeIn();
        }
        
    }, function(){
        $(".main-content-visual").removeClass("open");
        $(".mouseover,.main_video_text").stop().fadeIn();
    })
    

})