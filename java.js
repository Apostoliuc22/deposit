let form = document.forms.depozit

form.summ.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
    let initial = +form.summ.value;
    if (!initial) return;
    let interest = form.interest.value * 0.01;
    if (!interest) return;
    let years = form.months.value / 12;
    if (!years) return;
    let result = Math.round(initial * (1 + interest * years));
    document.getElementById("earns").innerHTML = result + "$";
}
calculate();