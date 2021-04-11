//bai22

// function test(arr) {
//     var arr1 = arr.sort();
//     var x = Math.round((arr1[0] + arr1[arr1.length - 1]) / 2);
//     var closest = arr1.reduce(function(a, b) {
//         return (Math.abs(a - x) < Math.abs(b - x) ? a : b);
//     })
//     console.log(arr1[arr1.length - 1], arr1[0], closest);
// }

// test([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

//bai23
// function countOccurrences(arr) {
//     arr.sort();
//     console.log(arr);
//     var b = [];
//     var a;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== a) {
//             b.push(1);
//         } else b[b.length - 1]++;
//         a = arr[i];
//         console.log(a);
//     }
//     b.sort();
//     console.log(b[b.length - 1]);
// }
// countOccurrences([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] );

//bai24
// function arrPrime(arr) {
//     var arr1 = arr.filter(function(n) {
//         if (n < 2) return false;
//         for (var i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i == 0) return false;
//         }
//         return true;
//     })
//     return arr1;
// }
// console.log(arrPrime([1, 2, 3, 2, 3, 4, 6, 7]));

//bai25
// function squareUp(arr) {
//     var arr1 = arr.map((x) => x * x);
//     console.log(arr1);
// }
// squareUp([1, 2, 3, 2, 3, 4, 6, 7]);

//bai26
// function findClosest(arr, k) {
//     var closest = arr[0];
//     var minus = Math.abs(arr[0] - k)
//     var b = [];
//     for (var i = 1; i < arr.length; i++) {
//         if (Math.abs(arr[i] - k) == minus) {
//             b.push(arr[i]);
//         }
//         if (Math.abs(arr[i] - k) < minus) {
//             b.splice(0, arr.length);
//             closest = arr[i];
//             minus = Math.abs(arr[i] - k);
//             b.push(closest);
//         }
//     }
//     console.log(b);
// }
// findClosest([1, 2, 3, 4, 6, 7], 5);

//bai27
// var students = [{
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]

// function chuanHoa(str) {
//     var str1 = str.toLowerCase().split(" ");
//     var str2 = str1.map(function(val) {
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return str2.join(" ");
// }

// function findA(students) {
//     for (var student of students) {
//         student.firstName = chuanHoa(student.firstName);
//         student.lastName = chuanHoa(student.lastName);
//     }
//     return students.filter(function(student) {
//         return (student.firstName.indexOf("a") >= 0 || student.firstName.indexOf("A") >= 0) && student.firstName.length >= 3;
//     })
// }

// console.log(findA(students));

//bai28
// var students = [{
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]

// function chuanHoa(str) {
//     var str1 = str.toLowerCase().split(" ");
//     var str2 = str1.map(function(val) {
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return str2.join(" ");
// }

// function findDo(students) {
//     for (var student of students) {
//         student.firstName = chuanHoa(student.firstName);
//         student.lastName = chuanHoa(student.lastName);
//     }
//     return students.filter(function(student) {
//         return (student.lastName.indexOf("Do")) >= 0
//     })
// }
// console.log(findDo(students));

//bai29
// var students = [{
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]

// function chuanHoa(str) {
//     var str1 = str.toLowerCase().split(" ");
//     var str2 = str1.map(function(val) {
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return str2.join(" ");
// }

// function sortName(students) {
//     for (var student of students) {
//         student.firstName = chuanHoa(student.firstName);
//         student.lastName = chuanHoa(student.lastName);
//     }
//     return students.sort((a, b) => a.firstName.localeCompare(b.firstName));
// }

// console.log(sortName(students));
//bai30
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var OK = 0;
// function secondMax(arr) {
//     var arr1 = arr.sort();
//     var max = arr1[arr1.length - 1];
//     for (var i = arr1.length - 2; i >= 0; i--) {
//         if (max > arr1[i]) {
//             max = arr1[i];
//             OK = 1;
//             break;
//         }
//     }
//     return max;
// }

//if(OK===1) console.log(secondMax(arr));
//else console.log(-1);

//bai31
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var k = 27;
// var OK = 0;

// function quayLui(i) {
//     if (i > 2) return false;
//     for (var j = i; j < arr.length; j++) {
//         k -= arr[j];
//         if (k !== 0 || i !== 2) quayLui(i + 1);
//         else OK = 1;
//         k += arr[j];
//     }
// }

// quayLui(0);
// if (OK === 1) console.log("YES");
// else console.log("NO");

// function tinh(arr) {
//     arr.sort();
//     for (var i = 0; i < arr.length; i++) {
//         var j = i + 1;
//         var n = arr.length - 1
//         if (arr[i] + arr[j] + arr[n] === k) return true;
//         (arr[i] + arr[j] + arr[n] - k > 0) ? j++ : n--;
//     }
//     return false;
// }
// if (tinh(arr)) console.log("YES");
// else console.log("NO");

//bai32
// var arr = [1, 3, 6, 9, 11, 20];
// var k = 13;

// function insertK(arr) {
//     for (var i = 0; i <= arr.length - 2; i++) {
//         if (arr[i] <= k && k <= arr[i + 1]){
//             arr.splice(i+1, 0, k);
//             break;
//         }
//     }
//     console.log(arr);
// }

// insertK(arr);

//bai33
// var arr = [9, 8, 7, 6, 4, 5, 3, 2, 1];

// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = arr.length - 1; j > i; j--) {
//             if (arr[i] > arr[j]) {
//                 var t = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = t;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr));