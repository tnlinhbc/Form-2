function Kiemtra() {
    var hoten = document.dangky.hoten.value;
    var email = document.dangky.email.value;
    var sdt = document.dangky.sdt.value;
    var chonthongtin = document.dangky.chonthongtin.value;
    var chonkhoahoc = document.dangky.chonkhoahoc.value;
    var noidung = document.dangky.noidung.value;
    if (hoten.length == "") {
        alert("Vui lòng nhập Họ Tên");
        document.dangky.hoten.focus();
        return false;
    }
    if (hoten.length == "") {
        alert("Vui lòng nhập Email");
        document.dangky.email.focus();
        return false;
    }
    if (sdt.length == "") {
        alert("Vui lòng nhập Số điện thoại");
        document.dangky.sdt.focus();
        return false;
    }
    if (chonthongtin == "chonnuoc") {
        alert("Vui lòng chọn một Nước");
        return false;
    }
    if (chonkhoahoc == "chonkhoahoc") {
        alert("Vui lòng chọn Một Khoá học")
        return false;
    }
    if (noidung.length == "") {
        alert("Vui lòng nhập nội dung");
        document.dangky.noidung.focus();
        return false;
    }
    alert("Đăng ký thành công")
    var thongtin = "<h3>THÔNG TIN ĐĂNG KÝ</h3>" +
        "<p>Họ tên: " + hoten + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Số Điện Thoại: " + sdt + "</p>" +
        "<p>Nước: " + chonthongtin + "</p>" +
        "<p>Khoá học: " + chonkhoahoc + "</p>" +
        "<p>Nội dung chi tiết: " + noidung + "</p>";
    document.getElementById("hienthongtin").innerHTML = thongtin;

}
function Datlai() {
    var reset = alert("Vui lòng nhập lại")

}