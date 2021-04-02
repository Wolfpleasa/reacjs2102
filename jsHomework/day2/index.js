// bai 11

// function countSpace() {
//     let str = window.prompt('Enter a String: ');
//     let count = 0;
//     var str1 = str.split("");
//     for (var x of str1) {
//         if (x === " ") count++;
//     }
//     console.log(count);
// }

// countSpace();

//bai12

// function removeSpace() {
//     let str = window.prompt('Enter a String: ');
//     var str1 = str.split("");
//     for (var i = 1; i < str1.length; i++) {
//         if (str1[i] === " ") str1[i] = "";
//     }
//     var str2 = str1.join("");
//     console.log(str2);
// }

// removeSpace();

//bai13

// let str = window.prompt('Enter a String: ');

// function Reverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(Reverse(str));
//bai14

// function contain() {
//     let s1 = window.prompt('Enter a first String: ');
//     let s2 = window.prompt('Enter a second String: ');
//     var s3 = s1.split(" ");
//     console.log(s3.indexOf(s2) + 1);
// }

// contain();

//bai15
// let str = window.prompt('Enter a String: ');

// function chuanHoa(str) {

//     var str1 = str.toLowerCase().split(" ");
//     var result = str1.map(function(val) {
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return result.join(" ");
// }

// console.log(chuanHoa(str));

//bai16
// function findId() {
//     let s1 = window.prompt('Enter a String: ');
//     let s2 = s1.split("/");
//     console.log(s2[s2.length - 1]);
// }

// findId();

//bai17
// function findMax(..._args) {
//     //let arr = window.prompt('Enter a array: ');
//     let arr1 = _args.sort();
//     console.log(arr1[arr1.length - 1]);
// }

// findMax(2, 4, 7);
//bai 18
// let s1 = window.prompt('Enter a first String: ');
// let s2 = window.prompt('Enter a second String: ');

// function contain(s1, s2) {

//     var s3 = s1.split(" ");
//     console.log(s3.lastIndexOf(s2));
// }

// contain(s1, s2);

//bai19
// let n = Number(window.prompt('Enter a number: '));

// function sum(n) {
//     if (n === 1) return 1;
//     return sum(n - 1) + n;
// }
// console.log(sum(n));