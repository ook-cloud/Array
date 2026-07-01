/* ============================================================
   ARRAYS 1 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Get one item (WORKED EXAMPLE) -----
// Write `secondItem(arr)` that RETURNS the item at index 1.
function secondItem(arr) {
  return arr[1];
}
console.log(secondItem(["a", "b", "c"]));

// TEST 1:  secondItem(["a","b","c"])   ->  "b"
// TEST 2:  secondItem([10, 20, 30])    ->  20
// TEST 3:  secondItem(["x", "y"])      ->  "y"

// ----- 2. How many items -----
// Write `howMany(arr)` that RETURNS the number of items.
function howMany(arr) {
  return arr.length;
}
console.log(howMany([1, 2, 3, 4]));

// TEST 1:  howMany([1,2,3,4])   ->  4
// TEST 2:  howMany([])          ->  0
// TEST 3:  howMany(["only"])    ->  1

// ----- 3. Last item -----
// Write `lastItem(arr)` that RETURNS the last item (any length).
// Hint: arr[arr.length - 1]
function lastItem(arr) {
  return arr[arr.length - 1];
}
console.log(lastItem(["x", "y", "z"]));

// TEST 1:  lastItem(["x","y","z"])   ->  "z"
// TEST 2:  lastItem([5])             ->  5
// TEST 3:  lastItem([1, 2, 3, 4])    ->  4

// ----- 4. Add to the end -----
// Write `addItem(arr, item)` that pushes item onto arr and RETURNS arr.
function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log(addItem([1, 2], 3));

// TEST 1:  addItem([1,2], 3)         ->  [1,2,3]
// TEST 2:  addItem([], "hi").length  ->  1
// TEST 3:  addItem(["a"], "b")       ->  ["a","b"]

// ----- 5. Remove the last -----
// Write `removeLast(arr)` that pops the last item off and RETURNS arr.
function removeLast(arr) {
  arr.pop();
  return arr;
}
console.log(removeLast([1, 2, 3]));
console.log(removeLast([9]));

// TEST 1:  removeLast([1,2,3])         ->  [1,2]
// TEST 2:  removeLast([9]).length      ->  0
// TEST 3:  removeLast([5,6,7,8])       ->  [5,6,7]

// ----- 6. Add to the front -----
// Write `addFront(arr, item)` that unshifts item to the front and RETURNS arr.
function addFront(arr, item) {
  arr.unshift(item);
  return arr;
}
console.log(addFront([2, 3], 1));

// TEST 1:  addFront([2,3], 1)   ->  [1,2,3]
// TEST 2:  addFront([], "a")    ->  ["a"]
// TEST 3:  addFront(["b"], "a") ->  ["a","b"]

// ----- 7. Is it in there? -----
// Write `hasItem(arr, item)` that RETURNS true/false if item is in arr.
// Hint: arr.includes(item)

function hasItem(arr, item) {
  return arr.includes(item);
}
console.log(hasItem(["cat", "dog"], "dog"));

// TEST 1:  hasItem(["cat","dog"], "dog")   ->  true
// TEST 2:  hasItem(["cat","dog"], "fish")  ->  false
// TEST 3:  hasItem([], "cat")              ->  false

// ----- 8. Where is it? -----
// Write `positionOf(arr, item)` that RETURNS the index, or -1 if missing.
// Hint: arr.indexOf(item)

function positionOf(arr, item) {
  return arr.indexOf(item);
}
console.log(positionOf(["a", "b", "c"], "c"));

// TEST 1:  positionOf(["a","b","c"], "c")   ->  2
// TEST 2:  positionOf(["a","b","c"], "z")   ->  -1
// TEST 3:  positionOf(["a","b","c"], "a")   ->  0
/* ============================================================
   ARRAYS 2 — METHODS: THE CHEAT SHEET (teach this first)
   ------------------------------------------------------------
   These REPLACE writing a loop by hand. Each method takes a
   FUNCTION and runs it on every item for you.
   Run:  node 2-methods.js
   ============================================================ */

const nums = [1, 2, 3, 4, 5, 6];

// map — TRANSFORM every item -> NEW array, same length
// console.log(nums.map((n) => n * 2));          // [2,4,6,8,10,12]

// filter — KEEP items that pass the test -> NEW array, shorter
// console.log(nums.filter((n) => n % 2 === 0)); // [2,4,6]

// find — FIRST item that passes (one item, not an array)
// console.log(nums.find((n) => n > 3));         // 4
// console.log(nums.find((n) => n > 99));        // undefined

// reduce — BOIL the whole array down to ONE value (sum, max...)
// acc = running result, n = current item, 0 = starting value
// console.log(nums.reduce((acc, n) => acc + n, 0));  // 21

// some / every — return true/false
// console.log(nums.some((n) => n > 5));         // true  (at least one)
// console.log(nums.every((n) => n > 0));        // true  (all of them)

// sort — order the array. For NUMBERS you MUST give (a,b)=>a-b
// console.log([3, 1, 2].sort((a, b) => a - b)); // [1,2,3]
// console.log([3, 1, 2].sort((a, b) => b - a)); // [3,2,1]

// CHAIN — filter then map, left to right
// console.log(nums.filter((n) => n % 2 === 0).map((n) => n * 10)); // [20,40,60]

/* ============================================================
   ARRAYS 2 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. map (WORKED EXAMPLE) -----
// Write `withTax(prices)` that RETURNS a NEW array with each price * 1.1.

function withTax(prices) {
  return prices.map((p) => p * 1.1);
}
console.log(withTax([10, 20]));
// TEST 1:  withTax([10,20])   ->  [11, 22]
// TEST 2:  withTax([])        ->  []
// TEST 3:  withTax([100])     ->  [110]

// ----- 2. filter -----
// Write `cheap(prices)` that RETURNS a NEW array of prices under 20.

function cheap(prices) {
  return prices.filter((p) => p < 20);
}
console.log(cheap([10, 25, 5, 40, 15]));

// TEST 1:  cheap([10,25,5,40,15])   ->  [10,5,15]
// TEST 2:  cheap([100,200])         ->  []
// TEST 3:  cheap([19,20,21])        ->  [19]

// ----- 3. find -----
// Write `firstExpensive(prices)` that RETURNS the first price over 30.
function firstExpensive(prices) {
  return prices.find((p) => p > 30);
}
console.log(firstExpensive([10, 25, 5, 40, 15]));

// TEST 1:  firstExpensive([10,25,5,40,15])   ->  40
// TEST 2:  firstExpensive([1,2,3])           ->  undefined
// TEST 3:  firstExpensive([50,99])           ->  50

// ----- 4. reduce (sum) -----
// Write `total(prices)` that RETURNS the sum using reduce.
function total(prices) {
  return prices.reduce((acc, p) => acc + p, 0);
}
console.log(total([10, 25, 5, 40, 15]));

// TEST 1:  total([10,25,5,40,15])   ->  95
// TEST 2:  total([])                ->  0
// TEST 3:  total([7])               ->  7

// ----- 5. some / every -----
// Write `anyFree(prices)` -> true if ANY price is 0.
// Write `allPositive(prices)` -> true if EVERY price is > 0.
function anyFree(prices) {
  return prices.some((p) => p === 0);
}
function allPositive(prices) {
  return prices.every((p) => p > 0);
}
console.log(anyFree([10, 0, 5]), allPositive([10, 0, 5]));

// TEST 1:  anyFree([10,0,5])       ->  true
// TEST 2:  allPositive([10,0,5])   ->  false
// TEST 3:  allPositive([10,5])     ->  true

// ----- 6. sort -----
// Write `lowToHigh(prices)` that RETURNS the prices sorted ascending.
// Hint: numbers need .sort((a,b) => a - b)
function lowToHigh(prices) {
  return prices.sort((a, b) => a - b);
}
console.log(lowToHigh([10, 25, 5, 40, 15]));

// TEST 1:  lowToHigh([10,25,5,40,15])   ->  [5,10,15,25,40]
// TEST 2:  lowToHigh([3,1,2])           ->  [1,2,3]
// TEST 3:  lowToHigh([2])               ->  [2]

// ----- 7. chain: filter then map -----
// Write `cheapDoubled(prices)` -> keep prices under 20, then double each.
function cheapDoubled(prices) {
  return prices.filter((p) => p < 20).map((p) => p * 2);
}
console.log(cheapDoubled([10, 25, 5, 40, 15]));

// TEST 1:  cheapDoubled([10,25,5,40,15])   ->  [20,10,30]
// TEST 2:  cheapDoubled([100])             ->  []
// TEST 3:  cheapDoubled([5,5])             ->  [10,10]

// ----- 8. methods on objects -----
// Write `inStockNames(items)` -> array of the .name of every item where .stock > 0.
// (filter by stock, then map to name — arrays + objects + methods together)
const inventory = [
  { name: "pen", stock: 5 },
  { name: "book", stock: 0 },
  { name: "bag", stock: 3 },
  { name: "cup", stock: 0 },
];
function inStockNames(items) {
  return items.filter((item) => item.stock > 0).map((item) => item.name);
}
console.log(inStockNames(inventory));

// TEST 1:  inStockNames(inventory)                        ->  ["pen","bag"]
// TEST 2:  inStockNames([])                               ->  []
// TEST 3:  inStockNames([{name:"x",stock:1}])             ->  ["x"]

/* ============================================================
   ARRAYS 3 — MOVIES DATABASE (boss level)
   ------------------------------------------------------------
   One big list of movie objects. Combine EVERYTHING: objects,
   conditions, and the array methods. Read the data shape first.
   Run:  node 3-database-movies.js
   ============================================================ */

// 16 movies. Fields:
//   title (string), year (number), genre (string),
//   rating (0-10), minutes (number), oscars (number)
const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "drama",
    rating: 9.3,
    minutes: 142,
    oscars: 0,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "action",
    rating: 9.0,
    minutes: 152,
    oscars: 2,
  },
  {
    title: "Inception",
    year: 2010,
    genre: "action",
    rating: 8.8,
    minutes: 148,
    oscars: 4,
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "drama",
    rating: 8.5,
    minutes: 132,
    oscars: 4,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "scifi",
    rating: 8.7,
    minutes: 169,
    oscars: 1,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "scifi",
    rating: 8.7,
    minutes: 136,
    oscars: 4,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "crime",
    rating: 8.9,
    minutes: 154,
    oscars: 1,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "drama",
    rating: 8.8,
    minutes: 142,
    oscars: 6,
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: "action",
    rating: 8.5,
    minutes: 155,
    oscars: 5,
  },
  {
    title: "Spirited Away",
    year: 2001,
    genre: "anime",
    rating: 8.6,
    minutes: 125,
    oscars: 1,
  },
  {
    title: "Whiplash",
    year: 2014,
    genre: "drama",
    rating: 8.5,
    minutes: 106,
    oscars: 3,
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "action",
    rating: 8.1,
    minutes: 120,
    oscars: 6,
  },
  {
    title: "Joker",
    year: 2019,
    genre: "crime",
    rating: 8.4,
    minutes: 122,
    oscars: 2,
  },
  {
    title: "Dune",
    year: 2021,
    genre: "scifi",
    rating: 8.0,
    minutes: 155,
    oscars: 6,
  },
  {
    title: "Oppenheimer",
    year: 2023,
    genre: "drama",
    rating: 8.3,
    minutes: 180,
    oscars: 7,
  },
  {
    title: "Your Name",
    year: 2016,
    genre: "anime",
    rating: 8.4,
    minutes: 106,
    oscars: 0,
  },
];

/* ============================================================
   BUILD THE 10   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countMovies(db) {
  return db.length;
}
console.log(countMovies(movies)); // 16
// TEST 1:  countMovies(movies)   ->  16
// TEST 2:  countMovies([])       ->  0
// TEST 3:  countMovies([movies[0]]) -> 1

// ----- 2. filter by genre -----
// Write `byGenre(db, genre)` -> array of movies in that genre.
function byGenre(db, genre) {
  return db.filter((m) => m.genre === genre);
}
console.log(byGenre(movies, "scifi").length);

// TEST 1:  byGenre(movies,"scifi").length   ->  3
// TEST 2:  byGenre(movies,"anime").length   ->  2
// TEST 3:  byGenre(movies,"horror").length  ->  0

// ----- 3. filter + condition -----
// Write `topRated(db)` -> movies with rating >= 8.7.
function topRated(db) {
  return db.filter((m) => m.rating >= 8.7);
}
console.log(topRated(movies).length);

// TEST 1:  topRated(movies).length                          ->  7
// TEST 2:  topRated(movies).every(m => m.rating >= 8.7)     ->  true
// TEST 3:  topRated([{rating:5}]).length                    ->  0

// ----- 4. map — just the titles -----
// Write `allTitles(db)` -> array of every title (strings only).
function allTitles(db) {
  return db.map((m) => m.title);
}
console.log(allTitles(movies)[0]);

// TEST 1:  allTitles(movies)[0]        ->  "The Shawshank Redemption"
// TEST 2:  allTitles(movies).length    ->  16
// TEST 3:  allTitles(movies)[15]        ->  "Your Name"

// ----- 5. find by title -----
// Write `findByTitle(db, title)` -> the one movie object, or undefined.
function findByTitle(db, title) {
  return db.find((m) => m.title === title);
}
console.log(findByTitle(movies, "Joker").year);

// TEST 1:  findByTitle(movies,"Joker").year     ->  2019
// TEST 2:  findByTitle(movies,"Dune").oscars    ->  6
// TEST 3:  findByTitle(movies,"Not Real")       ->  undefined

// ----- 6. reduce — total oscars -----
// Write `totalOscars(db)` -> sum of every movie's .oscars.
function totalOscars(db) {
  return db.reduce((acc, m) => acc + m.oscars, 0);
}
console.log(totalOscars(movies));

// TEST 1:  totalOscars(movies)            ->  52
// TEST 2:  totalOscars([])                ->  0
// TEST 3:  totalOscars([{oscars:3}])      ->  3

// ----- 7. average rating -----
// Write `averageRating(db)` -> mean rating, rounded to 1 decimal.
// Hint: total / length, then Number(x.toFixed(1)).
function averageRating(db) {
  if (db.length === 0) return 0;
  const total = db.reduce((acc, m) => acc + m.rating, 0);
  return Number((total / db.length).toFixed(1));
}
console.log(averageRating(movies));

// TEST 1:  averageRating(movies)                    ->  8.6
// TEST 2:  averageRating([{rating:8},{rating:9}])   ->  8.5
// TEST 3:  averageRating([{rating:7}])              ->  7

// ----- 8. sort — best first -----
// Write `bestFirst(db)` -> NEW array sorted by rating, highest first.
// Hint: [...db].sort((a,b) => b.rating - a.rating)  (copy first!)
function bestFirst(db) {
  return [...db].sort((a, b) => b.rating - a.rating);
}
console.log(bestFirst(movies)[0].title);

// TEST 1:  bestFirst(movies)[0].title    ->  "The Shawshank Redemption"
// TEST 2:  bestFirst(movies)[0].rating   ->  9.3
// TEST 3:  bestFirst(movies).length      ->  16

// ----- 9. chain — filter + sort + map -----
// Write `bestActionTitles(db)` -> action movies, sorted best-first, titles only.
function bestActionTitles(db) {
  return db
    .filter((m) => m.genre === "action")
    .sort((a, b) => b.rating - a.rating)
    .map((m) => m.title);
}
console.log(bestActionTitles(movies)[0]);

// TEST 1:  bestActionTitles(movies)[0]       ->  "The Dark Knight"
// TEST 2:  bestActionTitles(movies).length   ->  4
// TEST 3:  bestActionTitles(movies)[3]       ->  "Mad Max: Fury Road"

// ----- 10. GROUP — array of objects -> object of counts (the hard one) -----
// Write `countByGenre(db)` -> object mapping each genre to how many movies.
// Hint: result = {}; loop; result[m.genre] = (result[m.genre] || 0) + 1.
function countByGenre(db) {
  return db.reduce((acc, m) => {
    acc[m.genre] = (acc[m.genre] || 0) + 1;
    return acc;
  }, {});
}
console.log(countByGenre(movies).drama);

// TEST 1:  countByGenre(movies).drama    ->  5
// TEST 2:  countByGenre(movies).action   ->  4
// TEST 3:  countByGenre(movies).anime    ->  2

/* ============================================================
   ARRAYS 4 — EMPLOYEES DATABASE (boss level)
   ------------------------------------------------------------
   HR data. Same tools as the movies file. New twist at the end:
   group AND total a field per group (payroll by department).
   Run:  node 4-database-employees.js
   ============================================================ */

// 15 employees. Fields:
//   name (string), dept (string), salary (number),
//   age (number), years (number at company), remote (boolean)
const employees = [
  {
    name: "Sara",
    dept: "engineering",
    salary: 95000,
    age: 29,
    years: 4,
    remote: true,
  },
  {
    name: "Ali",
    dept: "engineering",
    salary: 110000,
    age: 35,
    years: 7,
    remote: false,
  },
  {
    name: "Omar",
    dept: "sales",
    salary: 60000,
    age: 41,
    years: 10,
    remote: false,
  },
  {
    name: "Lina",
    dept: "sales",
    salary: 72000,
    age: 38,
    years: 6,
    remote: true,
  },
  {
    name: "Maya",
    dept: "marketing",
    salary: 68000,
    age: 27,
    years: 2,
    remote: true,
  },
  {
    name: "Jon",
    dept: "engineering",
    salary: 130000,
    age: 45,
    years: 12,
    remote: false,
  },
  {
    name: "Eva",
    dept: "design",
    salary: 80000,
    age: 31,
    years: 5,
    remote: true,
  },
  {
    name: "Tom",
    dept: "design",
    salary: 75000,
    age: 28,
    years: 3,
    remote: false,
  },
  {
    name: "Nia",
    dept: "marketing",
    salary: 90000,
    age: 33,
    years: 6,
    remote: false,
  },
  {
    name: "Sam",
    dept: "sales",
    salary: 55000,
    age: 24,
    years: 1,
    remote: true,
  },
  {
    name: "Kim",
    dept: "engineering",
    salary: 105000,
    age: 39,
    years: 8,
    remote: true,
  },
  {
    name: "Leo",
    dept: "support",
    salary: 50000,
    age: 26,
    years: 2,
    remote: false,
  },
  {
    name: "Ada",
    dept: "support",
    salary: 58000,
    age: 30,
    years: 4,
    remote: true,
  },
  {
    name: "Max",
    dept: "design",
    salary: 88000,
    age: 36,
    years: 9,
    remote: false,
  },
  {
    name: "Zoe",
    dept: "marketing",
    salary: 72000,
    age: 25,
    years: 1,
    remote: true,
  },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countEmployees(db) {
  return db.length;
}
console.log(countEmployees(employees)); // 15

// TEST 1:  countEmployees(employees)   ->  15
// TEST 2:  countEmployees([])          ->  0
// TEST 3:  countEmployees([employees[0]]) -> 1

// ----- 2. filter by department -----
// Write `byDept(db, dept)` -> array of employees in that department.
function byDept(db, dept) {
  return db.filter((e) => e.dept === dept);
}
console.log(byDept(employees, "engineering").length);

// TEST 1:  byDept(employees,"engineering").length   ->  4
// TEST 2:  byDept(employees,"support").length       ->  2
// TEST 3:  byDept(employees,"legal").length         ->  0

// ----- 3. filter + condition — high earners -----
// Write `highEarners(db)` -> employees with salary > 90000.
function highEarners(db) {
  return db.filter((e) => e.salary > 90000);
}
console.log(highEarners(employees).length);

// TEST 1:  highEarners(employees).length                                ->  4
// TEST 2:  highEarners(employees).map(e => e.name).includes("Jon")  ->  true
// TEST 3:  highEarners(employees).map(e => e.name).includes("Omar") ->  false

// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every employee name.
function allNames(db) {
  return db.map((e) => e.name);
}
console.log(allNames(employees)[0]);

// TEST 1:  allNames(employees)[0]       ->  "Sara"
// TEST 2:  allNames(employees).length   ->  15
// TEST 3:  allNames(employees)[14]      ->  "Zoe"

// ----- 5. find by name -----
// Write `findEmployee(db, name)` -> the one object, or undefined.
function findEmployee(db, name) {
  return db.find((e) => e.name === name);
}
console.log(findEmployee(employees, "Eva").dept);

// TEST 1:  findEmployee(employees,"Eva").dept     ->  "design"
// TEST 2:  findEmployee(employees,"Eva").salary   ->  80000
// TEST 3:  findEmployee(employees,"Ghost")        ->  undefined

// ----- 6. reduce — total payroll -----
// Write `totalPayroll(db)` -> sum of every salary.
function totalPayroll(db) {
  return db.reduce((acc, e) => acc + e.salary, 0);
}
console.log(totalPayroll(employees));

// TEST 1:  totalPayroll(employees)         ->  1208000
// TEST 2:  totalPayroll([])                ->  0
// TEST 3:  totalPayroll([{salary:100}])    ->  100

// ----- 7. average salary -----
// Write `averageSalary(db)` -> mean salary, rounded with Math.round.
function averageSalary(db) {
  if (db.length === 0) return 0;
  const total = db.reduce((acc, e) => acc + e.salary, 0);
  return Math.round(total / db.length);
}
console.log(averageSalary(employees));

// TEST 1:  averageSalary(employees)                       ->  80533
// TEST 2:  averageSalary([{salary:100},{salary:200}])     ->  150
// TEST 3:  averageSalary([{salary:50}])                   ->  50

// ----- 8. filter boolean — remote workers -----
// Write `remoteWorkers(db)` -> employees where remote is true.
function remoteWorkers(db) {
  return db.filter((e) => e.remote === true);
}
console.log(remoteWorkers(employees).length);

// TEST 1:  remoteWorkers(employees).length                                ->  8
// TEST 2:  remoteWorkers(employees).map(e => e.name).includes("Sara") ->  true
// TEST 3:  remoteWorkers(employees).map(e => e.name).includes("Ali")  ->  false

// ----- 9. sort — highest paid first -----
// Write `topPaid(db)` -> NEW array sorted by salary, highest first.
// Hint: [...db].sort((a,b) => b.salary - a.salary)
function topPaid(db) {
  return [...db].sort((a, b) => b.salary - a.salary);
}
console.log(topPaid(employees)[0].name);

// TEST 1:  topPaid(employees)[0].name      ->  "Jon"
// TEST 2:  topPaid(employees)[0].salary    ->  130000
// TEST 3:  topPaid(employees)[14].name     ->  "Leo"

// ----- 10. chain — filter + sort + map -----
// Write `engineerNamesByPay(db)` -> engineers, sorted highest-paid first, names only.
function engineerNamesByPay(db) {
  return db
    .filter((e) => e.dept === "engineering")
    .sort((a, b) => b.salary - a.salary)
    .map((e) => e.name);
}
console.log(engineerNamesByPay(employees)[0]);

// TEST 1:  engineerNamesByPay(employees)[0]       ->  "Jon"
// TEST 2:  engineerNamesByPay(employees).length   ->  4
// TEST 3:  engineerNamesByPay(employees)[3]       ->  "Sara"

// ----- 11. GROUP + TOTAL — object of sums (the hard one) -----
// Write `payrollByDept(db)` -> object mapping each dept to its TOTAL salary.
// Hint: result = {}; loop; result[e.dept] = (result[e.dept] || 0) + e.salary.
function payrollByDept(db) {
  return db.reduce((acc, e) => {
    acc[e.dept] = (acc[e.dept] || 0) + e.salary;
    return acc;
  }, {});
}
console.log(payrollByDept(employees).engineering);

// TEST 1:  payrollByDept(employees).engineering   ->  440000
// TEST 2:  payrollByDept(employees).support       ->  108000
// TEST 3:  payrollByDept(employees).sales         ->  187000

/* ============================================================
   ARRAYS 5 — PRODUCTS DATABASE (boss level)
   ------------------------------------------------------------
   Online store data. Same tools again. Final twist: reduce two
   fields together (price * stock = inventory value).
   Run:  node 5-database-products.js
   ============================================================ */

// 15 products. Fields:
//   name (string), category (string), price (number),
//   stock (number), rating (0-5), onSale (boolean)
const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 1200,
    stock: 5,
    rating: 4.5,
    onSale: false,
  },
  {
    name: "Phone",
    category: "electronics",
    price: 800,
    stock: 12,
    rating: 4.7,
    onSale: true,
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 150,
    stock: 30,
    rating: 4.3,
    onSale: true,
  },
  {
    name: "Desk",
    category: "furniture",
    price: 300,
    stock: 8,
    rating: 4.1,
    onSale: false,
  },
  {
    name: "Chair",
    category: "furniture",
    price: 120,
    stock: 20,
    rating: 4.4,
    onSale: true,
  },
  {
    name: "Lamp",
    category: "furniture",
    price: 45,
    stock: 50,
    rating: 4.0,
    onSale: false,
  },
  {
    name: "Notebook",
    category: "stationery",
    price: 5,
    stock: 200,
    rating: 4.6,
    onSale: false,
  },
  {
    name: "Pen",
    category: "stationery",
    price: 2,
    stock: 500,
    rating: 4.2,
    onSale: true,
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 60,
    stock: 40,
    rating: 4.5,
    onSale: true,
  },
  {
    name: "Watch",
    category: "accessories",
    price: 250,
    stock: 15,
    rating: 4.8,
    onSale: false,
  },
  {
    name: "Monitor",
    category: "electronics",
    price: 400,
    stock: 10,
    rating: 4.6,
    onSale: true,
  },
  {
    name: "Keyboard",
    category: "electronics",
    price: 80,
    stock: 25,
    rating: 4.4,
    onSale: false,
  },
  {
    name: "Mug",
    category: "kitchen",
    price: 12,
    stock: 100,
    rating: 4.1,
    onSale: false,
  },
  {
    name: "Bottle",
    category: "kitchen",
    price: 18,
    stock: 80,
    rating: 4.3,
    onSale: true,
  },
  {
    name: "Blender",
    category: "kitchen",
    price: 90,
    stock: 0,
    rating: 4.0,
    onSale: false,
  },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countProducts(db) {
  return db.length;
}
console.log(countProducts(products));

// TEST 1:  countProducts(products)   ->  15
// TEST 2:  countProducts([])         ->  0
// TEST 3:  countProducts([products[0]]) -> 1

// ----- 2. filter by category -----
// Write `byCategory(db, cat)` -> array of products in that category.
function byCategory(db, cat) {
  return db.filter((p) => p.category === cat);
}
console.log(byCategory(products, "electronics").length);

// TEST 1:  byCategory(products,"electronics").length   ->  5
// TEST 2:  byCategory(products,"kitchen").length       ->  3
// TEST 3:  byCategory(products,"toys").length          ->  0

// ----- 3. filter + condition — in stock -----
// Write `inStock(db)` -> products with stock > 0.
function inStock(db) {
  return db.filter((p) => p.stock > 0);
}
console.log(inStock(products).length);

// TEST 1:  inStock(products).length                                ->  14
// TEST 2:  inStock(products).map(p => p.name).includes("Pen")  ->  true
// TEST 3:  inStock(products).map(p => p.name).includes("Blender") -> false

// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every product name.
function allNames(db) {
  return db.map((p) => p.name);
}
console.log(allNames(products)[0]);

// TEST 1:  allNames(products)[0]       ->  "Laptop"
// TEST 2:  allNames(products).length   ->  15
// TEST 3:  allNames(products)[14]      ->  "Blender"

// ----- 5. find by name -----
// Write `findProduct(db, name)` -> the one object, or undefined.
function findProduct(db, name) {
  return db.find((p) => p.name === name);
}
console.log(findProduct(products, "Watch").price);

// TEST 1:  findProduct(products,"Watch").price    ->  250
// TEST 2:  findProduct(products,"Watch").rating   ->  4.8
// TEST 3:  findProduct(products,"Nope")           ->  undefined

// ----- 6. reduce — total stock -----
// Write `totalStock(db)` -> sum of every product's stock.
function totalStock(db) {
  return db.reduce((acc, p) => acc + p.stock, 0);
}
console.log(totalStock(products));

// TEST 1:  totalStock(products)          ->  1095
// TEST 2:  totalStock([])                ->  0
// TEST 3:  totalStock([{stock:3},{stock:4}]) -> 7

// ----- 7. filter boolean — on sale -----
// Write `onSaleItems(db)` -> products where onSale is true.
function onSaleItems(db) {
  return db.filter((p) => p.onSale === true);
}
console.log(onSaleItems(products).length);

// TEST 1:  onSaleItems(products).length                                 ->  7
// TEST 2:  onSaleItems(products).map(p => p.name).includes("Phone") ->  true
// TEST 3:  onSaleItems(products).map(p => p.name).includes("Laptop")-> false

// ----- 8. filter + condition — expensive -----
// Write `expensive(db)` -> products with price > 200.
function expensive(db) {
  return db.filter((p) => p.price > 200);
}
console.log(expensive(products).length);

// TEST 1:  expensive(products).length                                  ->  5
// TEST 2:  expensive(products).map(p => p.name).includes("Watch")  ->  true
// TEST 3:  expensive(products).map(p => p.name).includes("Lamp")   ->  false

// ----- 9. sort — cheapest first -----
// Write `cheapest(db)` -> NEW array sorted by price, lowest first.
// Hint: [...db].sort((a,b) => a.price - b.price)
function cheapest(db) {
  return [...db].sort((a, b) => a.price - b.price);
}
console.log(cheapest(products)[0].name);

// TEST 1:  cheapest(products)[0].name     ->  "Pen"
// TEST 2:  cheapest(products)[0].price    ->  2
// TEST 3:  cheapest(products)[14].name    ->  "Laptop"

// ----- 10. chain — filter + sort + map -----
// Write `electronicsOnSaleByPrice(db)` -> electronics that are on sale,
// sorted most-expensive first, names only.
function electronicsOnSaleByPrice(db) {
  return db
    .filter((p) => p.category === "electronics" && p.onSale === true)
    .sort((a, b) => b.price - a.price)
    .map((p) => p.name);
}
console.log(electronicsOnSaleByPrice(products)[0]);

// TEST 1:  electronicsOnSaleByPrice(products)[0]       ->  "Phone"
// TEST 2:  electronicsOnSaleByPrice(products).length   ->  3
// TEST 3:  electronicsOnSaleByPrice(products)[2]       ->  "Headphones"

// ----- 11. reduce TWO fields — inventory value (the hard one) -----
// Write `inventoryValue(db)` -> sum of (price * stock) across all products.
// Hint: db.reduce((acc, p) => acc + p.price * p.stock, 0)
function inventoryValue(db) {
  return db.reduce((acc, p) => acc + p.price * p.stock, 0);
}
console.log(inventoryValue(products));

// TEST 1:  inventoryValue(products)                  ->  43940
// TEST 2:  inventoryValue([])                        ->  0
// TEST 3:  inventoryValue([{price:10,stock:2}])      ->  20

/* ============================================================
   ARRAYS 6 — FIFA PLAYERS DATABASE (final boss: GROUPING)
   ------------------------------------------------------------
   187 players. Files 3–5 grouped with a hand-written loop.
   THIS file does grouping the array-method way: reduce builds
   an OBJECT, then Object.entries turns it back into an array
   you can sort. No `for` loops anywhere — methods only.
   Run:  node 6-database-fifa.js
   ============================================================ */

// ---- DATA (generated with array methods, 100% deterministic) ----
// Fields: id, name, nation, club, position (GK/DEF/MID/FWD),
//         age, rating (60-99), goals, value (millions €)
const NATIONS = [
  "Brazil",
  "France",
  "Argentina",
  "Spain",
  "England",
  "Germany",
  "Portugal",
  "Netherlands",
];
const CLUBS = [
  "Madrid",
  "Barca",
  "City",
  "Bayern",
  "PSG",
  "Liverpool",
  "Juventus",
  "Milan",
];
function positionFor(i) {
  const r = (i * 7) % 10; // spreads 0-9 evenly
  return r < 2 ? "GK" : r < 5 ? "DEF" : r < 8 ? "MID" : "FWD";
}
const players = Array.from({ length: 187 }, (_, i) => {
  const rating = 60 + ((i * 17) % 40);
  return {
    id: i + 1,
    name: `Player ${i + 1}`,
    nation: NATIONS[(i * 7) % NATIONS.length],
    club: CLUBS[(i * 3) % CLUBS.length],
    position: positionFor(i),
    age: 18 + ((i * 13) % 20),
    rating,
    goals: (i * 11) % 35,
    value: (rating - 50) * 3 + ((i * 11) % 35),
  };
});

/* ============================================================
   GROUPING CHEAT SHEET (the only new idea in this file)
   ------------------------------------------------------------
   Grouping = turn a flat ARRAY into an OBJECT keyed by a field.
   The engine is reduce: start with {}, fold each item in.

   // COUNT per key:  {} -> { key: howMany }
   // arr.reduce((acc, x) => {
   //   acc[x.field] = (acc[x.field] || 0) + 1;   // +1 each time
   //   return acc;                               // ALWAYS return acc
   // }, {});

   // SUM per key:  swap the +1 for + x.someNumber
   //   acc[x.field] = (acc[x.field] || 0) + x.amount;

   // BUCKET per key:  collect the whole items into arrays
   //   (acc[x.field] ||= []).push(x);   // ||= makes the [] first time

   // OBJECT <-> ARRAY bridge (so you can sort groups):
   //   Object.keys(o)     -> ["GK","DEF",...]
   //   Object.values(o)   -> [38, 56, ...]
   //   Object.entries(o)  -> [["GK",38], ["DEF",56], ...]   <-- pairs!
   //   Object.fromEntries(pairs) -> back to an object
   //
   //   "sort groups by their number, biggest first":
   //   Object.entries(o).sort((a,b) => b[1] - a[1]).map(([k]) => k)
   ============================================================ */

/* ============================================================
   BUILD THE 12   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. bucket per key (WORKED EXAMPLE) -----
// Group players into { position: [those players] }.
function groupByPosition(db) {
  return db.reduce((acc, p) => {
    (acc[p.position] ||= []).push(p);
    return acc;
  }, {});
}
console.log(groupByPosition(players).GK.length);
console.log(groupByPosition(players).DEF.length);
console.log(Object.keys(groupByPosition(players)).length);

// TEST 1:  groupByPosition(players).GK.length            ->  38
// TEST 2:  groupByPosition(players).DEF.length           ->  56
// TEST 3:  Object.keys(groupByPosition(players)).length  ->  4

// ----- 2. count per key — clubs -----
// Write `countByClub(db)` -> { club: howMany players }.
function countByClub(db) {
  return db.reduce((acc, p) => {
    acc[p.club] = (acc[p.club] || 0) + 1;
    return acc;
  }, {});
}
console.log(countByClub(players).Madrid);
console.log(countByClub(players).Liverpool);
console.log(Object.keys(countByClub(players)).length);
// TEST 1:  countByClub(players).Madrid             ->  24
// TEST 2:  countByClub(players).Liverpool          ->  23
// TEST 3:  Object.keys(countByClub(players)).length ->  8

// ----- 3. count per key — positions -----
// Write `countByPosition(db)` -> { position: howMany }.
function countByPosition(db) {
  return db.reduce((acc, p) => {
    acc[p.position] = (acc[p.position] || 0) + 1;
    return acc;
  }, {});
}
console.log(countByPosition(players).GK);
console.log(countByPosition(players).MID);
console.log(countByPosition(players).FWD);

// TEST 1:  countByPosition(players).GK    ->  38
// TEST 2:  countByPosition(players).MID   ->  56
// TEST 3:  countByPosition(players).FWD   ->  37

// ----- 4. sum per key — goals per nation -----
// Write `goalsByNation(db)` -> { nation: total goals }.
function goalsByNation(db) {
  return db.reduce((acc, p) => {
    acc[p.nation] = (acc[p.nation] || 0) + p.goals;
    return acc;
  }, {});
}
console.log(goalsByNation(players).Portugal);
console.log(goalsByNation(players).Germany);
console.log(goalsByNation(players).Brazil);

// TEST 1:  goalsByNation(players).Portugal   ->  456
// TEST 2:  goalsByNation(players).Germany    ->  343
// TEST 3:  goalsByNation(players).Brazil     ->  348

// ----- 5. sum per key — squad value per club -----
// Write `valueByClub(db)` -> { club: total value }.
function valueByClub(db) {
  return db.reduce((acc, p) => {
    acc[p.club] = (acc[p.club] || 0) + p.value;
    return acc;
  }, {});
}
console.log(valueByClub(players).Liverpool);
console.log(valueByClub(players).Madrid);
console.log(valueByClub(players).City);

// TEST 1:  valueByClub(players).Liverpool   ->  2770
// TEST 2:  valueByClub(players).Madrid      ->  2196
// TEST 3:  valueByClub(players).City        ->  2599

// ----- 6. group THEN average — rating per position -----
// Write `avgRatingByPosition(db)` -> { position: avg rating, Math.round }.
// Hint: groupByPosition first, then Object.fromEntries(Object.entries(...).map(...)).

function avgRatingByPosition(db) {
  const groups = groupByPosition(db);
  const entries = Object.entries(groups).map(([pos, list]) => {
    const total = list.reduce((sum, p) => sum + p.rating, 0);
    return [pos, Math.round(total / list.length)];
  });
  return Object.fromEntries(entries);
}
console.log(avgRatingByPosition(players).FWD);
console.log(avgRatingByPosition(players).GK);
console.log(avgRatingByPosition(players).DEF);

// TEST 1:  avgRatingByPosition(players).FWD   ->  84
// TEST 2:  avgRatingByPosition(players).GK    ->  76
// TEST 3:  avgRatingByPosition(players).DEF   ->  78

// ----- 7. group THEN pick max — best player per position -----
// Write `bestByPosition(db)` -> { position: NAME of highest-rated player }.
// Hint: per group, v.reduce((best,p) => p.rating > best.rating ? p : best).name
function bestByPosition(db) {
  const groups = groupByPosition(db);
  const entries = Object.entries(groups).map(([pos, list]) => {
    const best = list.reduce((bestPlayer, p) =>
      p.rating > bestPlayer.rating ? p : bestPlayer,
    );
    return [pos, best.name];
  });
  return Object.fromEntries(entries);
}
// function bestByPosition(db) {
//   const groups = groupByPosition(db);
//   const entries = Object.entries(groups).map(([pos, list]) => {
//     const best = list.reduce((bestPlayer, p) =>
//       p.rating > bestPlayer.rating ? p : bestPlayer,
//     );
//     return [pos, best.name];
//   });
//   return Object.fromEntries(entries);
// }
console.log(bestByPosition(players).FWD);
console.log(bestByPosition(players).DEF);
console.log(bestByPosition(players).GK);

// TEST 1:  bestByPosition(players).FWD   ->  "Player 8"
// TEST 2:  bestByPosition(players).DEF   ->  "Player 3"
// TEST 3:  bestByPosition(players).GK    ->  "Player 24"

// ----- 8. count into custom buckets — age brackets -----
// Write `countByAgeBracket(db)` -> { u21, prime, veteran }
function countByAgeBracket(db) {
  return db.reduce(
    (acc, p) => {
      if (p.age <= 21) {
        acc.u21 = (acc.u21 || 0) + 1;
      } else if (p.age <= 29) {
        acc.prime = (acc.prime || 0) + 1;
      } else {
        acc.vet = (acc.vet || 0) + 1;
      }
      return acc;
    },
    { u21: 0, prime: 0, vet: 0 },
  );
}
console.log(countByAgeBracket(players).u21);
console.log(countByAgeBracket(players).prime);
console.log(countByAgeBracket(players).vet);

// TEST 1:  countByAgeBracket(players).u21     ->  37
// TEST 2:  countByAgeBracket(players).prime   ->  74
// TEST 3:  countByAgeBracket(players).vet     ->  76

// ----- 9. group -> entries -> filter — clubs with a big squad -----
// Write `clubsWithAtLeast(db, n)` -> array of club names having n+ players.
// Hint: Object.entries(countByClub(db)).filter(([,c]) => c >= n).map(([k]) => k)
function countByClub(db) {
  return db.reduce((acc, p) => {
    acc[p.club] = (acc[p.club] || 0) + 1;
    return acc;
  }, {});
}
function clubsWithAtLeast(db, n) {
  return Object.entries(countByClub(db))
    .filter(([, count]) => count >= n)
    .map(([clubName]) => clubName);
}
console.log(clubsWithAtLeast(players, 24).length);
console.log(clubsWithAtLeast(players, 23).length);
console.log(clubsWithAtLeast(players, 99).length);

// TEST 1:  clubsWithAtLeast(players, 24).length   ->  3
// TEST 2:  clubsWithAtLeast(players, 23).length   ->  8
// TEST 3:  clubsWithAtLeast(players, 99).length   ->  0

// ----- 10. group -> entries -> sort -> map — leaderboard -----
// Write `nationsByGoals(db)` -> nation names sorted by total goals, most first.
function nationsByGoals(db) {
  const goalsByNation = db.reduce((acc, p) => {
    acc[p.nation] = (acc[p.nation] || 0) + p.goals;
    return acc;
  }, {});
  return Object.entries(goalsByNation)
    .sort((a, b) => b[1] - a[1])
    .map(([nation]) => nation);
}
console.log(nationsByGoals(players)[0]);
console.log(nationsByGoals(players)[7]);
console.log(nationsByGoals(players).length);

// TEST 1:  nationsByGoals(players)[0]       ->  "Portugal"
// TEST 2:  nationsByGoals(players)[7]       ->  "Germany"
// TEST 3:  nationsByGoals(players).length   ->  8

// ----- 11. group -> entries -> sort -> take one — the winner -----
// Write `richestClub(db)` -> the single club name with the highest total value.
function richestClub(db) {
  const valueByClub = db.reduce((acc, p) => {
    acc[p.club] = (acc[p.club] || 0) + p.value;
    return acc;
  }, {});
  const sortedClubs = Object.entries(valueByClub).sort((a, b) => b[1] - a[1]);
  return sortedClubs[0] ? sortedClubs[0][0] : "";
}
console.log(richestClub(players));
console.log(richestClub([{ club: "X", value: 5 }]));
console.log(
  richestClub([
    { club: "A", value: 1 },
    { club: "B", value: 9 },
  ]),
);

// TEST 1:  richestClub(players)                       ->  "Liverpool"
// TEST 2:  richestClub([{club:"X",value:5}])          ->  "X"
// TEST 3:  richestClub([{club:"A",value:1},{club:"B",value:9}]) -> "B"

// ----- 12. NESTED report — object of objects (the hard one) -----
// Write `positionReport(db)` -> { position: { count, avgRating, totalGoals } }.
// Group once, then map each group to its three stats. Real dashboards look exactly like this.
function positionReport(db) {
  const grouped = db.reduce((acc, p) => {
    (acc[p.position] = acc[p.position] || []).push(p);
    return acc;
  }, {});
  return Object.fromEntries(
    Object.entries(grouped).map(([position, groupPlayers]) => {
      const count = groupPlayers.length;
      const totalRating = groupPlayers.reduce((sum, p) => sum + p.rating, 0);
      const avgRating = Math.floor(totalRating / count);
      const totalGoals = groupPlayers.reduce((sum, p) => sum + p.goals, 0);
      return [position, { count, avgRating, totalGoals }];
    }),
  );
}
console.log(positionReport(players).FWD.count);
console.log(positionReport(players).MID.avgRating);
console.log(positionReport(players).DEF.totalGoals);

// TEST 1:  positionReport(players).FWD.count       ->  37
// TEST 2:  positionReport(players).MID.avgRating   ->  81
// TEST 3:  positionReport(players).DEF.totalGoals  ->  959

/* ============================================================
   HOW GROUPING IS USED IN REAL LIFE
   ------------------------------------------------------------
   This IS the SQL `GROUP BY` you'll meet in every backend job:
       SELECT position, COUNT(*), AVG(rating)
       FROM players GROUP BY position;
   ...is exactly exercise 12, done in JS instead of the database.

   You reach for grouping whenever raw rows must become a summary:
   • Dashboards  — "players per club", "goals per nation" (charts
     are just grouped counts/sums fed to a bar chart).
   • Leaderboards / rankings — group, total, sort (ex. 10 & 11).
   • Reports & KPIs — averages and totals per category (ex. 6, 12).
   • Filters / facets — the "(24)" next to each club on a shop's
     sidebar is countByClub.
   • Buckets / histograms — age brackets, price ranges (ex. 8).
   Master reduce-into-an-object and you can summarize ANY dataset.
   ============================================================ */
