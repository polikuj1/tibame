// header區域
const header = document.querySelector('.header');
window.addEventListener('scroll', (e) => {
  if (window.scrollY > 80) {
    header.style.top = "0px";
    header.style.backgroundColor = "#F1F0F0";
  } else {
    header.style.top = "10px";
    header.style.backgroundColor = "rgba(255, 255, 255, .2)";
  }
})

// banner區域
const banner_btn_right = document.querySelector('.banner_btn .right');
const banner_btn_left = document.querySelector('.banner_btn .left');
const banner_pic = document.querySelectorAll('.banner_pic .pic');
const slogan = document.querySelectorAll('.slogan_item');

let count = 0;
banner_btn_right.addEventListener('click',() => {
  count++;
  if (count > 4) {
    count = 0
  }
  banner_pic.forEach((item, index) => {
    if (index === count) {
      item.style.display = 'block';
      item.classList.add('fade');
    } else {
      item.style.display = 'none';
      item.classList.remove('fade');
    }
  })
  slogan.forEach((item, index) => {
    if (index === count) {
      item.style.left = '10%';
    } else {
      item.style.left = '-100%';
    }
  })
}, false);
banner_btn_left.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = 4;
  }
  banner_pic.forEach((item, index) => {
    if (index === count) {
      item.style.display = 'block';
      item.classList.add('fade');
    } else {
      item.style.display = 'none';
      item.classList.remove('fade');
    }
  })
  slogan.forEach((item, index) => {
    if (index === count) {
      item.style.left = '10%';
    } else {
      item.style.left = '-100%';
    }
  })
}, false);


// 倒數計時

const countdown_day = document.querySelector('.countdown_day');
const countdown_hour = document.querySelector('.countdown_hour');
const countdown_minutes = document.querySelector('.countdown_minutes');
const countdown_seconds = document.querySelector('.countdown_seconds');

const now = Math.floor(Date.now()/1000);
const countdownDay = Math.floor(Date.parse(new Date(2023, 4, 5))) / 1000;
const timeGap = countdownDay - now;

function countDown() {
  const now = Math.floor(Date.now()/1000);
  const countdownDay = Math.floor(Date.parse(new Date(2023, 6, 5))) / 1000;
  const timeGap = countdownDay - now;
  const count = {
    day: Math.floor(timeGap / 24 / 3600),
    hour: Math.floor(timeGap / 3600 % 24),
    minutes: Math.floor(timeGap % 3600 / 60),
    seconds: timeGap % 60,
  };
  countdown_day.textContent = `${count.day}天`;
  countdown_hour.textContent = `${count.hour}時`;
  countdown_minutes.textContent = `${count.minutes}分`;
  countdown_seconds.textContent = `${count.seconds}秒`;
}
setInterval(countDown, 1000);


// media
const photo = document.querySelector('.photo_box');
const photo_re = document.querySelector('.photo_re');

setInterval(move,3000);
let distance = 0;
function move() {
  distance += -288;
  photo.style.left = distance + 'px';
  const num = photo.style.left;
  if (num == '-1440px') {
    distance = 1440;
    setTimeout(function() {
      photo.classList.remove('tr');
      setTimeout(function() {
        photo.style.left = `${distance}px`;
      },10)
      setTimeout(function() {
        photo.classList.add('tr');
      },100)
    },2800)
  }
}

setInterval(move1,3000);
let distance_re = 1440;
function move1() {
  distance_re += -288;
  photo_re.style.left = distance_re + 'px';
  const num = photo_re.style.left;
  if (num == '-1440px') {
    distance_re = 1440;
    setTimeout(function() {
      photo_re.classList.remove('tr');
      setTimeout(function() {
        photo_re.style.left = `${distance_re}px`;
      },10)
      setTimeout(function() {
        photo_re.classList.add('tr');
      },100)
    },2800)
  }
}

move();
move1();


const photo_ltr = document.querySelector('#photo_marquee');
const photo_ltr_re = document.querySelector('#photo_marquee1');

setInterval(ltr,3000);
let dis = 0;
function ltr() {
  dis += 288;
  photo_ltr.style.left = dis + 'px';
  const num = photo_ltr.style.left;
  if (num == '1440px') {
    dis = -1440;
    setTimeout(function() {
      photo_ltr.classList.remove('tr');
      setTimeout(function() {
        photo_ltr.style.left = `${dis}px`;
      },10)
      setTimeout(function() {
        photo_ltr.classList.add('tr');
      },100)
    },2800)
  }
}

setInterval(ltr1,3000);
let dis1 = -1440;
function ltr1() {
  dis1 += 288;
  photo_ltr_re.style.left = dis1 + 'px';
  const num = photo_ltr_re.style.left;
  if (num == '1440px') {
    dis1 = -1440;
    setTimeout(function() {
      photo_ltr_re.classList.remove('tr');
      setTimeout(function() {
        photo_ltr_re.style.left = `${dis1}px`;
      },10)
      setTimeout(function() {
        photo_ltr_re.classList.add('tr');
      },100)
    },2800)
  }
}

ltr();
ltr1();

// youtube蓋板
const video = document.querySelector('.video video');
const youtubeModal = document.querySelector('.modal');
const youtubeModal_btn = document.querySelector('.youtube button');

video.addEventListener('click', () => {
  youtubeModal.style.display = 'block';
})

youtubeModal_btn.addEventListener('click', () => {
  youtubeModal.style.display = 'none';
})