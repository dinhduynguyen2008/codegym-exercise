// Bài 1
let btnAction1Elem = document.getElementById("btn-action-1");

btnAction1Elem.addEventListener("click",() => {
    let chieudaiElem = parseFloat(document.getElementById("length").value);
    let chieuRongElem = parseFloat(document.getElementById("width").value);
    let resultElem = document.getElementById("info");

    if (chieudaiElem === chieuRongElem) {
        resultElem = ("Đây là hình vuông");
    } else {
        resultElem = ("Đây không phải là hình vuông");
    }
    document.getElementById("info").innerHTML = resultElem
})    

// Bài 2

let btnAction2Elem = document.getElementById("btn-action-2");

btnAction2Elem.addEventListener("click", () => {
    let numberAElem = parseFloat(document.getElementById("number-a").value);
    let numberBElem = parseFloat(document.getElementById("number-b").value);

    if (numberAElem >= numberBElem) {
        alert(`Số lớn nhất là ${numberAElem}`);
    } else {
        alert(`Số lớn nhất là ${numberBElem}`);
    }
});

// Bài 3

let btnAction3Elem = document.getElementById("btn-action-3");

btnAction3Elem.addEventListener("click", () =>{
let n = parseFloat(document.getElementById("n").value);

if (n >= 0) {
    alert(`Giá trị tuyệt đối của ${n} là ${n}`);
} else {
    alert (`Giá trị tuyệt đối của ${n} là ${-n}`);
}
});

// Bài 4

let btnAction4Elem = document.getElementById("btn-action-4");

btnAction4Elem.addEventListener("click", () => {
    let dayElem = parseInt(document.getElementById("day").value);

if (dayElem === 2) {
    resulDayElem = ("Monday");
} else if (dayElem == 3) {
    resulDayElem = ("Tuesday");
} else if (dayElem == 4) {
    resulDayElem = ("Wednesday");
} else if (dayElem == 5) {
    resulDayElem = ("Thurday");
} else if (dayElem == 6) {
    resulDayElem = ("Friday");
} else if (dayElem == 7) {
    resulDayElem = ("Saturday");
} else if (dayElem == 8) {
    resulDayElem = ("Sunday");
} else if (dayElem > 8) {
    resulDayElem = ("Input wrong");
    // hoặc nếu nhập số lớn hơn 8 sẽ ra kết quả là SUnday else alet("Sunday")
}
document.getElementById("aDay").innerHTML = resulDayElem
})    

// Bài 5

let btnAction5Elem = document.getElementById("btn-action-5");

btnAction5Elem.addEventListener("click", () => {
    let n1Elem = parseInt(document.getElementById ("n1").value);
    let n2Elem = parseInt(document.getElementById ("n2").value);
    let n3Elem = parseInt(document.getElementById ("n3").value);
    let largeNumElem = parseInt(document.getElementById ("so-lon-nhat").value);

    if (n1Elem >= n2Elem && n1Elem >= n3Elem) {
        largeNumElem = (`Số lớn nhất là ${n1Elem}`);
    } else if ( n2Elem >= n1Elem && n2Elem >= n3Elem) {
        largeNumElem = (`Số lớn nhất là ${n2Elem}`);
    } else {
        largeNumElem = (`Số lớn nhất là ${n3Elem}`);
    }

    document.getElementById ("so-lon-nhat").innerHTML = largeNumElem
})