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
