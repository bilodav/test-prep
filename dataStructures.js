// Array Data Structure

const arr = [1, 2, 3, "Bilo"];

arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const el of arr) {
  console.log(el);
}

//Objects

const obj = {
  name: "Bruce",
  age: 25,
  "key-three": false,
  sayMyName(greeter = "Hello") {
    console.log(`${greeter}, ${this.name}`);
  },
};

obj.hobby = "football";

delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj);
obj.sayMyName("Hi");

for (let el in obj) {
  console.log(el);
}

console.log("key-three" in obj);

// Set Data Structure
console.log("/////////////////");

const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));

set.delete(3);
set.clear();
console.log(set.size);

for (const el of set) {
  console.log(el);
}

// Map Data Structures

console.log("/*/*/*/*/");

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);

console.log(map.has("a"));
map.delete("c");
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Stack Data Structures
