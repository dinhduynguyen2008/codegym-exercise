let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click",() => {
    // lấy giá trị từ thẻ input
    let billValue = parseFloat( document.getElementById("bill-value").value);
    // console.log(billValue);
    // console.log(typeof(billValue));
    // alert(billValue);
    // alert(typeof(billValue));
    if (billValue >= 2000000) {
        alert(`Bạn đã được giảm giá ${billValue*0.1}`);
        // cập nhật giá trị đơn hàng
        // billValue = billValue * 0.9; hoặc cách như dưới
        billValue *= 0.9;
    }
    // thao tác xử lý trong trường hợp kết quả kiểm tra là false
    else {
        (billValue < 2000000)
        alert(`Bạn đã được giảm giá ${billValue * 0.05}`);
        billValue *= 0.95;
    }

    let infoElem = document.getElementById("info");
    infoElem.innerText = `Bạn cần thanh toán ${billValue} VND`;
});