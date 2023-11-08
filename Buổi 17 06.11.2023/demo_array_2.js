let nameList =  ["Anne","Bella", "Chris", "Dan"];

// Duyệt từng phần tử bên trong mảng
document.write("Danh sách phần tử trong nameList: <br>");
// vòng lặp for
// for (let i = 0)

for (let i = 0; i< nameList.length; i++) {
    document.write(`${nameList[i]} <br>`);

    for (let i in nameList) {
        document.write(`${nameList[i]} <br>`);
    }
}