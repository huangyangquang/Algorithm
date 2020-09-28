/**
 * @param {string} dominoes
 * @return {string}
 */

// var pushDominoes = function(dominoes) {
//     var len = dominoes.length
//     var arr = dominoes.split("")//字符串转数组
//     var i = 0, // 快指针
//         j = 0 // 慢指针
//     while (i < len) {
//         if (arr[j] == '.' && arr[i] == 'L') { // .L ==> LL
//             while (i !== j) {
//                 arr[j] = 'L'
//                 j++
//             }
//             j = i
//         }
//         if (arr[j] == '.' && arr[i] == 'R') { // .R ==> .R
//             j = i
//         }
//         if (arr[j] == 'L' && arr[i] == 'L') { // LL ==> LL
//             while (i !== j) {
//                 arr[j] = 'L'
//                 j++
//             }
//             j = i
//         }
//         if (arr[j] == 'L' && arr[i] == 'R') { // LR ==> LR
//             j = i
//         }
//         if (arr[j] == 'R' && arr[i] == 'R') { // RR ==> RR
//             while (i !== j) {
//                 arr[j] = 'R'
//                 j++
//             }
//             j = i
//         }
//         if (arr[j] == 'R' && arr[i] == 'L') { // R..L ==> RRLL;  R.L ==> R.L
//             let m = i
//             while (j < m) {
//                 arr[j] = 'R'
//                 arr[m] = 'L'
//                 j++
//                 m--
//             }
//             j = i
//         }
//         if (i === len-1 && arr[j] == 'L' && arr[i] == '.') { // L. ===> L.
//             j = i
//         }
//         if (i === len-1 && arr[j] == 'R' && arr[i] == '.') { // R. ==> RR
//             while (j <= i) {
//                 arr[j] = 'R'
//                 j++
//             }
//             j = i
//         }
//         i++
//     }
//     return arr.join("")
// };


function pushDominoes(str) {
    if(str === null) return str;
    var len = str.length,
        res = str.split(""),
        i = 0,
        j = 0;
    
    while(i < len) {
        if(res[j] === '.' && res[i] === 'L') {
            while(i !== j) {
                res[j] = 'L';
                j ++;
            }
            j = i;
        } else if(res[j] === '.' && res[i] === 'R') {
            j = i;
        } else if(res[j] === 'L' && res[i] === "L") {
            while(i !== j) {
                res[j] = "L";
                j ++;
            }
            j = i;
        } else if(res[j] === 'L' && res[i] === "R") {
            j = i;
        } else if(res[j] === 'R' && res[i] === "R") {
            while(i !== j) {
                res[j] = "R";
                j ++;
            }
            j = i;
        } else if(res[j] === 'R' && res[i] === "L") {
            var m = i;
            while(j < m) {
                res[j] = 'R';
                res[m] = 'L';
                j ++;
                m --;
            }
            j = i;
        } else if(i === len - 1 && res[j] === 'L' && res[i] === '.') {
            j = i;
        } else if(i === len - 1 && res[j] === 'R' && res[i] === '.') {
            while(j <= i) {
                res[j] = 'R';
                j ++;
            }
            j = i;
        }
        i ++;
    }

    return res.join("");
}

