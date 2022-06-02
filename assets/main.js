var age = 20;
var nextAge = age + 1;
console.log(nextAge);

// 3.22 : Thực hành nối chuỗi
var firstName = "Kiều";
var lastName = "Trang";
var fullName = firstName + " " + lastName;
console.log(fullName);

// 3.25 : Thực hành dùng Boolean
var age = 16;
var canBuyAlcohol = age > 18;
console.log(canBuyAlcohol);

// 4.37 : Thực hành tạo hàm Sum #2
function sum(a, b) {
  return a + b;
}

sum(1, 2);
console.log(sum);

// 4.38 : Thực hành dùng hàm Sum
function sum(a, b) {
  return a + b;
}

var result = sum(20, 10);
console.log(result);

// 4.39 : Thực hành dùng hàm Triple #2
function triple(x) {
  return 3 * x;
}
var result = triple(3);
console.log(result);

// 4.40 : Thực hành dùng hàm Triple
function triple(x) {
  return x * 3;
}

var result = triple(10);
console.log(result);

// 4.45 : Hàm lấy độ dài chuỗi
function getContentLength(content) {
  return String(content).length;
}

console.log(getContentLength());

// 4.46 : Chuyển đổi sang chữ in hoa
function getUpperCaseName(name) {
  return name.toUpperCase();
}

console.log(getUpperCaseName("kiều"));

// 6.50 : Viết hàm kiểm tra kiểu number #2
function isNumber(value) {
  var a = value;
  if (typeof a == typeof 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber(1));

// 6.51 : Thực hành viết hàm kiểm tra kiểu number #2
function isNumber(value) {
  if (Number(value) === value) {
    return true;
  } else {
    return false;
  }
  if (isNumber == NaN) {
    return false;
  }
}
console.log(isNumber(2));

// 6.56 : Làm việc với mảng #1
function joinWithCharacter(array, charactor) {
  return array.join(charactor, " - ");
}
console.log(joinWithCharacter(["kiều", "trang", "hà"], " - "));

// 6.51 : :Làm việc với mảng #2
function getLastElement(animals) {
  return animals.slice(-1);
}
console.log(getLastElement(["kiều", "trang", "hà"]));

// 6.58 : Làm việc với mảng #3
function getFirstElement(arrays) {
  return arrays[0];
}
console.log(getFirstElement(["kiều", "trang", "hà"]));

// 8.63 : Tạo object constructor Animal
function Animal(name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
}

var parrot = new Animal("vẹt", 1, 11111);
console.log(parrot);

// 8.65 : Thêm phương thức getFullName
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log(Student);

// 8.67 : Hoàn thiện hàm getNextYear
function getNextYear() {
  var date = new Date();
  return date.getFullYear() + 1;
}
console.log(getNextYear());

// 8.69 : Lấy ngẫu  nhiên phần tử của mảng
function getRandomItem(array) {
  array[4] = Math.floor(Math.random()) * 4;
  return array[4];
}
console.log(getRandomItem([1, 2, 3, 4]));

// 9.71 : Thử thách khó, dùng if/else
function run(a) {
  //
  if (a % 15 == 0) {
    return 3;
  } else if (a % 5 == 0) {
    return 2;
  } else if (a % 3 == 0) {
    return 1;
  }
}

console.log(run(6));

// 9.73 : Hoàn thành thử thách còn thiếu #1
function run(fruits) {
  var result;

  switch (fruits) {
    case "Banana":
      result = "This is a Banana";
      break;
    case "Apple":
      result = "This is an Apple";
      break;
  }

  return result;
}
console.log(run("Banana"));

// 9.74 : Hoàn thành thử thách còn thiếu #2
function run(fruits) {
  var result;

  switch (fruits) {
    case "Banana":
      result = "This is a Banana";
      break;
    case "Apple":
      result = "This is an Apple";
      break;
    default:
      result = "No fruits";
  }

  return result;
}
console.log(run("Banana"));

// 9.76 : Hàm kiểm tra đủ tuổi bỏ phiếu
function getCanVoteMessage(age) {
  return age > 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
}

console.log(getCanVoteMessage(20));

// 10.79 : Tạo danh sách số ngẫu nhiên
var arr = [];
function getRandNumbers(min, max, length) {
  for (var i = 0; i < length; i++) {
    arr[i] = Math.random() * (max - min) + min;
  }
  return arr;
}
console.log(getRandNumbers(1, 10, 10));

const functions = {
  o1: "string",
  o2: 1,
  o3: true,
  o4: {
    printName: (name) => {
      return name;
    },
  },
  f1: (object) => {
    var arr = [];
    for (var key in object) {
      arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
  },
  f2: (min, max, length) => {
    for (var i = 0; i < length; i++) {
      arr[i] = Math.random() * (max - min) + min;
    }
    return arr;
  },
};

console.log(["bai4", functions.o4.printName("Nguyễn Văn A")]);

console.log({
  tenbai: "bai 5",
  ngaylap: "12/12/2019",
  nguoilap: "kiều",
  noidung: "hàm kiểm tra đủ tuổi bỏ phiếu",
  ketqua: [
    {
      name: "Nguyen Van A",
      age: 16,
    },
    {
      name: "Nguyen Van B",
      age: 17,
    },
  ],
});
var a = [];
console.log(a);
a.push(0);
a.push(3.14);
a.push("string");
a.push(true);
a.push(() => console.log("hàm"));
a[4]();

//bubble sort
a.push(function bubbleSort(arr) {
  var temp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
});

const b = [3, 1, 2, 9, 10, 4, 5, 6, 7];

console.log(a[5](b));

// 10.83 : Bài tập sử dụng for...in
function run(object) {
  var arr = [];
  for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

console.log(
  run({
    name: "Nguyen Van A",
    age: 16,
  })
);

// singly linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//
for (var i = 100; i >= 0; i -= 5) {
  console.log(i);
}

////
function giaiThua(num){
  var output = 1;
  for(var i = num; i > 0 ; i--){
    output = output * i;
  }
  return output;
}
console.log(giaiThua(4))


// 11.113: Thực hành sử dụng phương thức reduce #2
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];

function calculateRating(arr){
  var a = arr.filter(function(movie){
    return movie.Director === 'Christopher Nolan'
  })
  var b = a.reduce(function(total, imdb){
    return total + Number(imdb.imdbRating);
  }, 0)
  console.log(b / a.length);
  return b / a.length;
}


// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

// 11.111 : thực hành sử dụng phương thức reduce #1
var sports = [
  {
      name: 'Bơi lội',
      gold: 11
  },
  {
      name: 'Boxing',
      gold: 3
  },
  {
      name: 'Đạp xe',
      gold: 4
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
]

function getTotalGold(data){
  return data.reduce(function(total, element){
      return total + element.gold
  }, 0)
}



// Expected results:
console.log(getTotalGold(sports)) // Output: 23


// 11.115: Thực hành sử dụng phương thức reduce #3
var arr = [['name', 'Sơn Đặng'], ['age', 18]]
   function arrToObj(arr){
    return  arr.reduce(function(a,b){
        return Object.fromEntries(arr);
    },
    {})
}
// Expected results
console.log(arrToObj(arr)) // Output: { name: 'Sơn Đặng', age: 18 }



// 12.119: Tạo chương trình tính toán
function sumCb(a, b) {
  return a + b;
}

function subCb(a, b){
  return a - b;
}

function multiCb(a, b){
  return a * b;
}

function divCb(a, b){
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
caculate(1, 2, sumCb) // Output: 3
caculate(1, 2, subCb) // Output: -1
caculate(1, 2, multiCb) // Output: 2
caculate(3, 1, divCb) // Output: 3



// 12.121 Thực hành tạo phuong thức myMap() :
Array.prototype.myMap = function(cb) {
  var out = [], n= this.length;
  for(var i =0; i < n; i++){
      var results = cb(this[i],i)
      out.push(results)
  }
  return out;
}

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]


Array.prototype.mySome = function (cb) {
  for (var index in this) {
      if (this.hasOwnProperty(index)) {
          var result = cb(this[index], index, this)
          if (result) {
              return true;
          } 
      }
  }
  return false;
}


console.log("CCCCCCCCCCCCCCCCCCCCCCCC");

const listF = [
  () => {
    console.log("F0");
  },
  () => {
    console.log("F1");
  },
  () => {
    listF[0]();
    listF[1]();
  }
];

listF[2]();
