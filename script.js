let output_first = document.getElementById("output_first");
console.log(output_first);
let items = Array.from(document.querySelectorAll(".item"));

items.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (output_first.innerHTML == "0") output_first.innerHTML = "";

    if (btn.innerHTML == "AC") output_first.innerHTML = "0";
    else if (btn.innerHTML == "DEL") {
      let currentValue = output_first.innerHTML;
      if (currentValue.length > 1) {
        output_first.innerHTML = currentValue.slice(0, -1);
      } else {
        output_first.innerHTML = "0";
      }
    } else if (btn.innerHTML == "=") {
      let reusult = eval(output_first.innerHTML);
      output_first.innerHTML = parseFloat(reusult.toFixed(2));
    } else output_first.innerHTML += btn.innerHTML;
  });
});
