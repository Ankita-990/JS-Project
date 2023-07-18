const clock = document.getElementById('clock');

// const date = new Date();
// console.log(date.toLocaleTimeString())

// Most IMPORTANT function from interview prospective
setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
