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

//====CLASSES AND TDD

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  (this.collection = collection), (this.itemsPerPage = itemsPerPage);

  return this;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const res = [];
  for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
    const subArray = this.collection.slice(i, i + this.itemsPerPage);
    res.push(subArray);
  }
  return res[pageIndex] ? res[pageIndex].length : -1;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  const res = [];
  for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
    const subArray = this.collection.slice(i, i + this.itemsPerPage);
    res.push(subArray);
  }
  const resultPage = res.find((page) =>
    page.includes(this.collection[itemIndex])
  );
  return res.indexOf(resultPage);
};

var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log("page count", helper.pageCount()); //should == 2
console.log("item count", helper.itemCount()); //should == 6
console.log("pageItem count 0", helper.pageItemCount(0)); //should == 4
console.log("pageItem count 1", helper.pageItemCount(1)); // last page - should == 2
console.log("pageItem count 2", helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log("pageIndex 5", helper.pageIndex(3));

//TEST CASES
//Install a test library
collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
helper = new PaginationHelper(collection, 10);

Test.expect(helper.pageCount() == 3, "pageCount is returning incorrect value.");

Test.expect(
  helper.pageItemCount(1) == 10,
  "pageItemCount is returning incorrect value."
);
Test.expect(
  helper.pageItemCount(2) == 4,
  "pageItemCount is returning incorrect value"
);
Test.expect(
  helper.pageItemCount(3) == -1,
  "pageItemCount is returning incorrect value"
);
Test.expect(
  helper.pageIndex(40) == -1,
  "pageIndex returned incorrect value when provided a itemIndex argument that was out of range"
);

Test.expect(helper.pageIndex(22) == 2, "pageIndex returned incorrect value");
Test.expect(helper.pageIndex(3) == 0, "pageIndex returned incorrect value");
Test.expect(
  helper.pageIndex(0) == 0,
  "pageIndex returned incorrect value. pageIndex(0) should return 0"
);
Test.expect(
  helper.pageIndex(-1) == -1,
  "pageIndex returned incorrect value when provided a itemIndex argument that was out of range. pageIndex(-1) should return -1"
);
Test.expect(
  helper.pageIndex(-23) == -1,
  "pageIndex returned incorrect value when provided a item_index argument that was out of range. pageIndex(-23) shoudl return -1"
);
Test.expect(
  helper.pageIndex(-15) == -1,
  "pageIndex returned incorrect value when provided a item_index argument that was out of range."
);

Test.expect(helper.itemCount() == 24, "itemCount returned incorrect value");

helper = new PaginationHelper([], 10);
Test.assertEquals(
  helper.pageIndex(0),
  -1,
  "pageIndex(0) called when there was an empty collection"
);
