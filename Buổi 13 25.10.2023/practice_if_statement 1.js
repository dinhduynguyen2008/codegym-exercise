let btnActionElem = document.getElementById("kiểm-tra");

btnActionElem.addEventListener("click",() => {
    let gioLamElem = parseFloat(document.getElementById("giolam").value);
    let capNvElem = parseFloat(document.getElementById("capNv").value);
    let ketQuaElem = document.getElementById("info");
  if (gioLamElem > 400) {

  if (capNvElem == 1) {
        ketQuaElem = ("Bạn được thưởng 1000USD");
    } else {
        ketQuaElem = ("Bạn được thưởng 2000USD");
  }
    }else {
        ketQuaElem = ("Bạn chưa đủ điều kiện thưởng");
  }

    document.getElementById("info").innerHTML = ketQuaElem;
});