// bai 0

// let n = window.prompt('Enter a number: ');

// function isPrime(n) {
//     if (n < 2) return false;
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// if (isPrime(n)) console.log("YES");
// else console.log("NO");

//bai8

// let n = window.prompt('Enter a number: ');

// function oddNum(n) {
//     while (n > 0) {
//         var m = n % 10;
//         n = Math.floor(n / 10);
//         console.log(n);
//         if (m % 2 == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// if (oddNum(n)) console.log("YES");
// else console.log("NO");

// bai9

// let n = window.prompt('Enter a number: ');

// function check(n) {
//     var m = 0;
//     var n1 = n;
//     while (n > 0) {
//         m = m * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     if (m == n1) return true;
//     else return false;
// }

// if (check(n)) console.log("YES");
// else console.log("NO");

//bai10

// for (var i = 2; i <= 9; i++) {
//     for (var j = 1; j <= 10; j++) {
//         console.log(i + 'x' + j + '=' + i * j);
//     }
// }