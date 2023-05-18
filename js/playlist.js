const cd = document.querySelectorAll('.cd .pic img');
const cdTitle = document.querySelectorAll('.cd .title');
console.log(cdTitle);
cd.forEach(item => {
  item.addEventListener('click', cdRotate);
})
let angle = 0;
let isRotate = 0;
let interval;
let isPlay = 0;
function cdRotate(e) {
  const id = e.target.dataset.cd;
  cd.forEach((item,index) => {
    if(item.dataset.cd === id) {
      isPlay = 1;
      playMusic(index);
      txtHover(index);
      if(isRotate === 0) {
        console.log('判斷是否正在旋轉');
        isRotate = 1;
        interval = setInterval(function() {
            angle += 0.5;
            if(angle > 360) {angle = 0};
            item.style.transform = `rotate(${angle}deg)`;
          },10);
      } else {
        console.log(angle);
        clearInterval(interval);
        isRotate = 0;
        console.log('解除定時');
        isPlay = 0;
        playMusic(index);
      }
    }
  })
}

const src = ['Vaundy', '愛', 'Ado', 'milet', 'YOASOBI'];
const audio = [
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
];
audio.forEach((item,index) => {
  item.audio.src = `../playlist/${src[index]}.mp3`;
})

function playMusic(index) {
  console.log(index);
  audio.forEach((item, order) => {
    console.log(item,order);
    if(index === order) {
      if(isPlay) {
        console.log("開始撥放");
        item.audio.play();
      } else {
        console.log("終止播放");
        item.audio.pause();
      }
    } else {
      item.audio.pause();
    }
  })
  
}

function txtHover(index) {
  cdTitle.forEach((item, order) => {
    if(index === order) {
      item.classList.add('title_hover');
    } else {
      item.classList.remove('title_hover');
    }
  })
}