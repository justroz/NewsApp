let status = document.getElementById("progressDiv")
let bar = document.getElementById("barDiv")
let btn = document.getElementById("click")





function move() {
    let  width = 10;
    let id = setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        bar.style.width = width + '%'; 
        bar.innerHTML = width * 1  + '%';
      }
    }
  }
