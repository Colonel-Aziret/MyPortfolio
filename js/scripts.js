var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
var add = document.getElementById('increment');
var remove = document.getElementById('decrement');

var int = document.getElementById('number');
var integer =0;

add.addEventListener('click', function(){
  integer+=1;
  int.innerHTML = integer;
})
remove.addEventListener('click',function(){
  integer-=1;
  int.innerHTML=integer;
}) 