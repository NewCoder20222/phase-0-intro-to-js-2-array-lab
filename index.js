// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"];

 beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

 

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function appendCat(name) {
    var cat= [...cats,name];
    return cat;
}
function prependCat(name) {
    var catt=[name, ...cats];
    return catt;
}
function removeLastCat() {
    var caat=cats.slice(0,cats.length - 1);
    return caat
}
function removeFirstCat() {
    var caatt=cats.slice(1);
    return caatt
}