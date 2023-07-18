const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.getElementById('results');
  const conclusion = document.getElementById('conclusion');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      conclusion.innerHTML = 'A person is under weight';
    } else if (bmi > 18.6 && bmi <= 24.9) {
      conclusion.innerHTML = 'A person has normal weight';
    } else if (bmi > 24.9) {
      conclusion.innerHTML = 'A person is over weight';
    }
  }
});
