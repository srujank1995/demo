$(window).ready(function(){

    var letters = $('.letter');
    $(letters[0]).addClass('active');
    setButtonHeight();
  
    $('.forward p').click(function(){
      var active = $('.active').next();
      for (var i = letters.length - 1; i >= 0; i--) {
        $(letters[i]).removeClass('active');
      }
  
      if ($(active).hasClass('letter')) {
        $(active).addClass('active');
      } else {
        $(letters[0]).addClass('active');
      }
  
      // setButtonHeight();
  
    });
  
    $('.back p').click(function(){
  
      var active = $('.active').prev();
      for (var i = letters.length - 1; i >= 0; i--) {
        $(letters[i]).removeClass('active');
      }
  
      if ($(active).hasClass('letter')) {
        $(active).addClass('active');
      } else {
        $(letters[letters.length -1]).addClass('active');
      }
  
      // setButtonHeight();
  
    });
  
    function setButtonHeight() {
      var height = $('.letter-wrapper').height();
      $('div.back p').css({ top: height/2 + 'px' });
      $('div.forward p').css({ top: height/2 + 'px' });
  
    }
  
  });

 
document.addEventListener("DOMContentLoaded", function() {
  const heartContainer = document.getElementById("heart-container");
  
  function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.animationDuration = (Math.random() * 1 + 0.5) + "s";
      heart.style.backgroundColor = getRandomColor();
      
      heartContainer.appendChild(heart);
      
      setTimeout(() => {
          heart.remove();
      }, 5000);
  }
  
  function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  
  setInterval(createHeart, 200);
});
