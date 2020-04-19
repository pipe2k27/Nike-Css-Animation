// mouseover tap

$(".box").hover(function() {
  $(".box").addClass("mouseover");},function() {
    $(".box").removeClass("mouseover");}
);



// logo beat animation

function moveDash() {
  $(".logo-sm").addClass("finish");
  setTimeout(function() {
    $(".logo-sm").removeClass("finish");
  }, 800);
  setTimeout(function() {
    moveDash();
  }, 1600);
}


// first animations

$(".box").on("click", function() {
  // move 1: spin  nike
  $(".box").addClass("move");
 // move 2: extend nike logo
    setTimeout(function() {
      $(".box").addClass("move2");
      $(".overBox").addClass("move2");
    }, 280);
    // move 3: drop down black

  setTimeout(function(){
    $(".box").addClass("move3");
    $(".overBox").addClass("move3");
    $(".shoe-1").addClass("move3");
    $(".logo").addClass("move3");
  },580);

// move 4 add text and logo

setTimeout(function(){
  $(".text1").addClass("move4");
  $(".small-logo").addClass("move4");
},800);

  });


  // shoe animations

  $(".sum").on("click", function() {

    $(".shoe-1").addClass("sum-on");
    $(".shoe").addClass("sum-on");
    setTimeout(function(){
    $(".shoe").attr("src","images/zapa-ver.png");
},400);
  });

  $(".win").on("click", function() {

    $(".shoe-1").removeClass("sum-on");
    $(".shoe").removeClass("sum-on");
    setTimeout(function(){
    $(".shoe").attr("src","images/zapa-inv.png");
},400);


  });
