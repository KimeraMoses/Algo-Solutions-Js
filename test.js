// define an integer
let i = 0;

// define an array
let j = [];
j.push(0);

// define an object
let q = {};
q.value = 0;

let funcs = [];

for (i = 0; i < 4; i++) {
  j[0] = i;
  q.value = i;
  funcs.push(() => {
    console.log(`i: ${i}, j: ${j[0]}, q: ${q.value}`);
  });
}
for (i = 0; i < 4; i++) {
  funcs[i]();
}
