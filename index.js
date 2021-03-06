let min = document.getElementById("min");
let max = document.getElementById("max");
let input = document.getElementById("input");

let countMinBtn = true;
let countMaxBtn = true;
let countInputBtn = true;

const addMin = document.getElementById("add-min");
const subMin = document.getElementById("sub-min");

const addMax = document.getElementById("add-max");
const subMax = document.getElementById("sub-max");

const addInput = document.getElementById("add-input");
const subInput = document.getElementById("sub-input");

const enter = document.getElementById("enter");

let output = document.getElementById("output");
output.textContent = "";

function generateRandom() {
  return (
    (Math.floor(Math.random() * (max.value - min.value + 1)) + min.value) / 10
  );
}

min.value = null;
max.value = null;
input.value = null;

enter.value = "โ";

addMin.addEventListener("click", () =>
  countMinBtn === true ? ((min.value = 0), (countMinBtn = false)) : min.value++
);
subMin.addEventListener("click", () =>
  countMinBtn === true ? ((min.value = 0), (countMinBtn = false)) : min.value--
);

addMax.addEventListener("click", () =>
  countMaxBtn === true ? ((max.value = 10), (countMaxBtn = false)) : max.value++
);
subMax.addEventListener("click", () =>
  countMaxBtn === true ? ((max.value = 10), (countMaxBtn = false)) : max.value--
);

addInput.addEventListener("click", () =>
  countInputBtn === true
    ? ((input.value = generateRandom()), (countInputBtn = false))
    : input.value++
);
subInput.addEventListener("click", () =>
  countInputBtn === true
    ? ((input.value = generateRandom()), (countInputBtn = false))
    : input.value--
);

enter.addEventListener("click", () => {
  enter.value = "โ";

  if (!min.value || !max.value || !input.value) {
    output.textContent = "Please enter your range and guess properly! ๐";
  } else {
    if (input.value > generateRandom()) {
      output.textContent = "The number was is lower! ๐คจ";
    } else if (input.value < generateRandom()) {
      output.textContent = "The number was higher! ๐คจ";
    } else {
      output.textContent = "Wohoo! You've nailed it! ๐ฅณ";
      enter.value = "โป";
    }
  }
});
