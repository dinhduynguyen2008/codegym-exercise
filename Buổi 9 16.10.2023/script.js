// truy vấn HTML element
let titleElem = document.getElementById("Title");
// in ra
console.log(titleElem);
// lấy nội dung (inner HTML) của element
console.log(titleElem.innerHTML);
// thay đổi nội dung element
titleElem.innerHTML = "Average Math Calculation";
// thay đổi màu chữ
titleElem.style.color = "Red";

//2. thêm element mới vào Student List

// tạo ra một thẻ mới
let newItemElem = document.createElement("li");

// setup nội dung cho element mới
newItemElem.innerHTML = "3. Evan - 9 - 8 - 8.5";

//  thêm phần tử mới vào thẻ ul
let StudentlistElem = document.getElementById("Student List");
StudentlistElem.appendChild(newItemElem);

// 3. xóa form element ra khỏi trang web
let studentFormElem = document.getElementById("student form");
studentFormElem.remove() 