function getCurrentRate() {
  rate = document.getElementById("rate").value || 1;
  document.getElementById("currentRate").innerHTML = rate;
  return rate;
}

function compute() {
  p = document.getElementById("principal").value;
  if (p <= 0) {
      alert('Please enter a positive principal');
      document.getElementById("principal").focus();
  }
  rate = getCurrentRate();
  year = document.getElementById("years").value || 0;

  interest = p * rate/100 * year;
  nextDue = new Date().getFullYear() + parseInt(year);

  document.getElementById("result").style.display = "block";
  document.getElementById("oAmount").innerHTML = p;
  document.getElementById("oRate").innerHTML = rate;
  document.getElementById("oNextDue").innerHTML = nextDue;
  document.getElementById("oInterest").innerHTML = interest;
}
