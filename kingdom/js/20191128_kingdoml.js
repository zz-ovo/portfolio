$("document").ready(function(){
    // alert("check")
    var count = 0,
        height = $(".section").height(),
        time = false,
        $indicator = $(".indicator ul li"),
        text = [
            "홈","시놉시스","이벤트","예고편"
        ],
        $event = $(".section").eq(2).find("a"),
        $nav = $(".section .nav ul li");
    
//    setInterval(function(){
//    $(".scroll span").toggleClass("width") 
//        },2000)
    //scroll animate -> cssanimation으로 바꿈 ㅠ
     

    $indicator.eq(0).find("a").text(text[0]).addClass("fz");
    //처음부터 들어있는 값

    $(window).on("mousewheel DOMMousewheel",function(e){
        var delta = e.originalEvent.wheelDelta;
        console.log(delta)
        
        if(time == true){
            return;
        }
        setTimeout(function(){
            time = false;
        },1000)
        time = true;
        
        if(delta < 0){
            // 휠 다운
            count++;
            if(count > $(".section").length -1){
//                 count = $(".section").length -1;
                count = 0;//처음으로 돌아가기
            }
            
        } else{
            // 휠 업
            count--;
            if(count < 0){
                count = 0;
            }
        }
      

        $("html,body").stop().animate({
            scrollTop: height * count
            
        },1000)
        
        $indicator.find("a").text("◎");
        $indicator.eq(count).find("a").text(text[count])
        $indicator.find("a").removeClass("fz").eq(count).addClass("fz")
        // $indicator.find("a").removeClass("on").eq(count).addClass("on")
      
       
    })//wheel end

    $indicator.click(function(){
        count = $(this).index();

        if(time == true){
            return;
        }
        setTimeout(function(){
            time = false;
        },1000)
        time = true;
        //동시작업안일어나게 해주는 소스

        $("html,body").stop().animate({
            scrollTop: height * count
        },1000,"easeInQuint")

        $indicator.find("a").text("◎");
        //클릭하지 않은 나머지 기호들
      $indicator.find("a").removeClass("fz").eq(count).removeClass("fz")
     $indicator.eq(count).find("a").text(text[count])
        //클릭하면 나타나는 기호

    })//click end
    
    $event.click(function(e){
        e.preventDefault();
        $(".window").fadeIn(700)
        $(".window").fadeTo(1000,0.8);
        $(".modal").show();
    })

    $(".modal span").click(function(){
        $(".window").fadeOut(500)
        $(".window").fadeTo(10,1)
        $(".modal").hide();
    })//modal popup end

    $nav.click(function(){
        count = $(this).index();
        console.log(count)

        if(time == true){
            return;
        }
        setTimeout(function(){
            time = false;
        },1000)
        time = true;
        //동시작업안일어나게 해주는 소스

        $("html,body").stop().animate({
            scrollTop: height * count
        },1000,"easeInQuint")
        $indicator.find("a").text("◎");
        //클릭하지 않은 나머지 기호들
      $indicator.find("a").removeClass("fz").eq(count).removeClass("fz")
     $indicator.eq(count).find("a").text(text[count]) 

    })

})