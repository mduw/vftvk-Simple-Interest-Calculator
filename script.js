function getCurrentRate() {
  rate = document.getElementById("rate").value || 0;
  document.getElementById("currentRate").innerHTML = rate;
}

function compute() {
  p = document.getElementById("principal").value || 0;
  getCurrentRate();
  year = document.getElementById("years").value || 0;

  interest = p * rate/100 * year;
  nextDue = new Date().getFullYear() + parseInt(year);

  document.getElementById("result").style.display = "block";
  document.getElementById("oAmount").innerHTML = p;
  document.getElementById("oRate").innerHTML = rate;
  document.getElementById("oNextDue").innerHTML = nextDue;
  document.getElementById("oInterest").innerHTML = interest;
}
