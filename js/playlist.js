const cd = document.querySelectorAll('.cd .pic');
console.log(cd);
cd.forEach(item => {
  item.addEventListener('click', cdRotate);
})
let angle = 0;
let isRotate = 0;
let interval;
function cdRotate(e) {
  const id = e.target.dataset.cd;
  cd.forEach(item => {
    if(item.dataset.cd === id) {
      if(isRotate === 0) {
        console.log('判斷是否正在旋轉');
        isRotate = 1;
        interval = setInterval(function() {
            angle += 5;
            if(angle > 360) {angle = 0};
            item.style.transform = `rotate(${angle}deg)`;
          },50);
      } else {
        clearInterval(interval);
        isRotate = 0;
        console.log('解除定時');
      }
    }
  })
}
