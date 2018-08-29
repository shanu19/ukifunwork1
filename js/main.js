


SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

//A.R rhman
$(document).ready(function() {
  SC.stream('/tracks/329815283',function(sound){
    $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

 SC.stream('/tracks/199318748',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/345809390',function(sound){
    $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



//cj
  SC.stream('/tracks/75962835',function(sound){
    $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/283583539',function(sound){
    $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/170314863',function(sound){
    $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


//imaan
  SC.stream('/tracks/145132437',function(sound){
    $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/249806339',function(sound){
    $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop7').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/177169087',function(sound){
    $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


  //sid sriram
  SC.stream('/tracks/315401304',function(sound){
    $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


SC.stream('/tracks/363589097',function(sound){
  $('#start10').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop10').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});


SC.stream('/tracks/407128221',function(sound){
  $('#start11').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop11').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
  });

});
