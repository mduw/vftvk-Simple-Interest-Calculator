function getCurrentRate() {
    rate = document.getElementById("rate").value;
    document.getElementById("currentRate").innerHTML = rate;
}
function compute()
{
    p = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    year = document.getElementById("years").value;
    document.getElementById("currentRate").innerHTML=rate;
    interest = p * rate * year;
    resultElement = document.getElementById("result");
    resultElement.innerHTML = interest;
}
        