$(document).ready(function(){
  $('.toggle').click(function(){
    $('.navigation').toggleClass('active')
    $('.toggle').toggleClass('animated');
    $('.icon').css('z-index', '2')
  });
  $('#soon').click(function(){
    $('#comingsoon').show();
  });
  $('#comingsoon').click(function(){
    $('#comingsoon').hide();
  })
})
onscroll = function() {
if (window.pageXOffset > 700){
document.getElementById('one').className = 'slideup'
}
if (window.pageXOffset > 880){
document.getElementById('two').className = 'slideup'
}
if (window.pageXOffset > 1300){
document.getElementById('three').className = 'slideup'
}
}
