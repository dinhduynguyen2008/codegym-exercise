// Bài 4: Cho 2 array có cùng số phần tử với nhau. 
let array1 = [10, 20, 30, 40];
let array2 = [100, 200, 300, 400];

let array3 = [ ]
if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
       
     array3.push(array1[i] + array2[array2 - 1 - i])
    }
document.write(array3);  
}
// Hãy in các thành phần trong 2 array theo format dưới đây (sử dụng document.write)
/**
 * 10 400
 * 20 300
 * 30 200
 * 40 100
 */