function check_month() {

    let month = Number(document.getElementById("month").value)
    if (month < 0 || month > 12)
        alert("Lỗi")

    else switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            alert("thang co 30 ngay");
            break;
        case 2:
            alert("thang co 28 hoac 29 ngay");
            break;
        default:
            alert("thang co 31 ngay");


    }
}











