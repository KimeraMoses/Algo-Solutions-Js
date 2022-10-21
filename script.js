const rootContainer = document.getElementById("root");
const h2 = document.createElement("h2");
const resultDiv = document.createElement("div");
const result = document.createElement("div");
h2.classList.add("heading");
result.classList.add("result");
resultDiv.classList.add("results-container");

var resultValue = "Nothing to show yet";

h2.innerText = "Welcome to Algo Playground";
resultDiv.innerHTML = `<p>This is my play ground for writing solutions for different javascript algo questions</p>`;
resultDiv.append(result);

rootContainer.append(h2);
rootContainer.append(resultDiv);

//Play ground for different JavaScript algo questions

function persistence(num) {
  let counter = 0;
  for (; String(num).length > 1; counter++) {
    num = String(num)
      .split("")
      .reduce((a, b) => a * b);
  }
  return counter;
}

//  console.log(persistence(39)) //3

function validatePIN(pin) {
  var pattern = /^\d+\.?\d*$/;
  const newPin = Array.from(pin.split(""), (x) => (pattern.test(x) ? +x : x));
  const pinLengthy =
    newPin.length === 4 ? true : newPin.length === 6 ? true : false;
  if (pinLengthy && newPin.every((el) => typeof el === "number")) {
    return true;
  } else {
    return false;
  }
}

function spinWords(string) {
  const stringArray = string.split(" ");
  const newArray = [];
  stringArray.forEach((word) => {
    if (word.length > 4) {
      const reversWord = word.split("").reverse().join("");
      newArray.push(reversWord);
    } else {
      newArray.push(word);
    }
  });
  return newArray.join(" ");
}

// console.log(spinWords(" A Welcome back Moxhus!")) // A emocleW back !suhxoM

function alphabetPosition(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}
//console.log(alphabetPosition("A Welcome back Moxhus!")) //1 23 5 12 3 15 13 5 2 1 3 11 13 15 24 8 21 19

function high(x) {
  const stringArray = x.split(" ");
  const alphArray = [...Array(26)].map((_, idx) =>
    String.fromCharCode(idx + 97)
  );
  const stringScore = [];
  stringArray.forEach((word) => {
    const wordArray = word.split("");
    let wordScore = 0;
    wordArray.forEach((el) => {
      wordScore += alphArray.indexOf(el) + 1;
    });
    stringScore.push({
      word,
      score: wordScore,
    });
  });
  const winner = stringScore.find(
    (word) => word.score === Math.max(...stringScore.map((word) => word.score))
  );
  return winner?.word;
}

// resultValue = high("man i need a taxi up to ubud");
result.innerHTML = `<p>${resultValue}</p>`;
