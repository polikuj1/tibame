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

// hashtag

const marquee_one = document.querySelector('#one');
const marquee_one_rp = document.querySelector('#one_repeat');


function mar() {
  marquee_one.style.left = '-100%';
}