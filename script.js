function getCurrentRate() {
  rate = document.getElementById("rate").value || 0;
  document.getElementById("currentRate").innerHTML = rate;
}
function compute() {
  p = document.getElementById("principal").value || 0;
  getCurrentRate();
  year = document.getElementById("years").value || 1;
  interest = p * rate * year;
  nextDue = new Date().getFullYear() + parseInt(year);
  document.getElementById("oAmount").innerHTML = p;
  document.getElementById("oRate").innerHTML = rate;
  document.getElementById("oNextDue").innerHTML = nextDue;
  document.getElementById("oInterest").innerHTML = interest;
}
