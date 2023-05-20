const cd = document.querySelectorAll('.cd .pic img');
const cdTitle = document.querySelectorAll('.cd .title');
const progress_container = document.querySelector('.progress_container');
const progress_current = document.querySelector('.current_time');
// console.log(cdTitle);
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
      progress_container.style.display = 'block';
      if(isRotate === 0) {
        console.log('判斷是否正在旋轉');
        isRotate = 1;
        interval = setInterval(function() {
            angle += 0.5;
            if(angle > 360) {angle = 0};
            item.style.transform = `rotate(${angle}deg)`;
          },10);
      } else {
        // console.log(angle);
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


let perProgress;
let playLength = 0;

audio.forEach((item,index) => {
  item.audio.src = `../playlist/${src[index]}.mp3`;
  item.audio.addEventListener('ended', () => {
    clearInterval(interval);
    isRotate = 0;
    console.log('解除定時');
    isPlay = 0;
  })
  item.audio.addEventListener('playing', () => {
    
    console.log(item.audio.duration);
    const totalDuration = item.audio.duration;
    perProgress = 100 / totalDuration;
    console.log(perProgress);
    console.log(item.audio.currentTime, '播放到幾秒');
    loadingBar(true);
    // setInterval(() => {
    //   playLength += perProgress;
    //   progress_current.style.width = `${playLength}%`;
    // }, 1000);
  })
  item.audio.addEventListener('pause', () => {
    console.log(item.audio.currentTime);
    loadingBar(0, 0, false);
  })
})

function playMusic(index) {
  // console.log(index);
  audio.forEach((item, order) => {
    // console.log(item,order);
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

let timer;
function loadingBar(playOrPause) {
  if(playOrPause) {
    timer = setInterval(() => {
      playLength += perProgress;
      progress_current.style.width = `${playLength}%`;
    }, 1000);
    console.log('進度條加載');
  } else {
    clearInterval(timer);
    console.log('暫停進度條');
  }
}