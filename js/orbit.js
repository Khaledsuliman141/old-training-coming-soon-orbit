$(document).ready(function ()
            {
        "use strict";
        
        //============ start slide show ===============
        
        var slideIndex = 0;
        showSlides();
        
        function showSlides() {
            var i,
                slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i = i + 1) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 6000); // Change image every 6 seconds
        }
        
        //======= Start wrapper change choices Home,About,Services and Subscription ========

        $('.choice').click(function () {
            $('.active').removeClass('active');
            $(this).addClass("active");
        });

        //================== start countdown ====================
         
        // Set the event's date 
        var countDownDate = new Date(2020, 8, 19).getTime(),
        
        // Update the count down every 1 second
            x = setInterval(function () {
        
          // todays date and time
                var now = new Date().getTime(),
        
          // Find the distance between now and the countdown date
                    distance = countDownDate - now,
        
          // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance / (1000 * 60 * 60 * 24) - (31)),
                    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          //the result in the element 
                document.getElementById("day").textContent = days;
                document.getElementById("hour").textContent = hours;
                document.getElementById("minute").textContent = minutes;
                document.getElementById("second").textContent = seconds;
        
          // If the count down is finished, it will be 00
                if (days < 0) {
                    clearInterval(x);
                    document.getElementById("day").innerHTML = "00";
                    document.getElementById("hour").innerHTML = "00";
                    document.getElementById("minute").innerHTML = "00";
                    document.getElementById("second").innerHTML = "00";
                }
          
            }, 1000);
        
         // ================== Start Loading ===================        
        $(window).on('load', function ()
                    {
            
                $(".loading").fadeOut(1500,
                    function ()
                    {
                        $(this).remove();
                    });
            });

    });

