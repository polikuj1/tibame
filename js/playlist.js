const cd = document.querySelectorAll('.cd .pic');
console.log(cd);
cd.forEach(item => {
  item.addEventListener('click', cdRotate);
})

function cdRotate(e) {
  const cd = e;
  console.log(cd);
  console.log(134);
  // cd.forEach(item => {
  //   if
  // })
}