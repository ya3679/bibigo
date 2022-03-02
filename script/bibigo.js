(function($,window){
    var bibigo ={
        init: function(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            // this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.footer();
        },
        header: function(){
            $('.main-btn').on({
                mouseenter: function(){
                  $('.main-btn').removeClass('addCurrent');
                  $(this).addClass('addCurrent');
                  $('.sub').stop().slideUp(0);
                  $(this).next().stop().slideDown(600,'easeOutExpo');
                }
            });

            
            $('.top-center').on({
                mouseleave: function(){
                  $('.main-btn').removeClass('addCurrent');
                  $('.sub').stop().slideUp(600,'easeOutExpo');
                }
            }); 
        },
        
        section1:function(){
            $('#section1').addClass('addFadein');
        },
        section2:function(){
            // $('#section2').addClass('addFadein');
            var sec1Top = $('#section1').offset().top;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section2').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec1Top ){
                    $('#section2').addClass('addAni')
                }

            });
        },
        section3:function(){
            var sec2Top = $('#section2').offset().top;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section3').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec2Top ){
                    $('#section3').addClass('addAni')
                }

            });
        },
        section4:function(){
            var sec3Top = $('#section3').offset().top;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section4').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec3Top ){
                    $('#section4').addClass('addAni')
                }

            });
        },
        /* section5:function(){
            
        }, */
        section6:function(){
            var sec4Top = $('#section4').offset().top;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section6').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec4Top ){
                    $('#section6').addClass('addAni')
                }

            });
        },
        section7:function(){
            var sec6Top = $('#section6').offset().top;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section7').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec6Top ){
                    $('#section7').addClass('addAni')
                }

            });
        },
        section8:function(){
            var sec7Top = $('#section7').offset().top;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section8').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec7Top ){
                    $('#section8').addClass('addAni')
                }

            });
        },
        section9:function(){

        },
        footer:function(){

        }
    }
    bibigo.init();
})(jQuery,window);