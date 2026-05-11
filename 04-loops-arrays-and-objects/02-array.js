let sanPham = ["ao", "quan", "giay", "mu"];

console.log(sanPham[1]);
console.log(sanPham[10]);

let ketQuaTimKiem = ["iphone 13", "iphone 20"];
console.log(ketQuaTimKiem.length);

let danhSachLoi = [];

danhSachLoi.push("Nut dang nhap khong bam duoc");
danhSachLoi.push("Thong bao loi khong ro");

console.log(danhSachLoi);

let cacTrangThaiChoChoPhep = ["success", "pending", "approved", "shipped", "delivered"];

let trangThaiThucTe = "approved";

if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
    console.log("Trang thai hop le");
} else {
    console.log("Trang thai khong hop le");
}

//rút phần tử cuối cùng ra ngoài
let lichSuDuyetWeb = ["Trang chủ", "Sản phẩm", "Giỏ hàng"];
let trangVuaThoat = lichSuDuyetWeb.pop();

console.log(trangVuaThoat);
console.log(lichSuDuyetWeb);

//Shift:rút phần từ đầu tiên ra ngoài
let hangChoHoTro = ["khách A", "khách B", "khách C"];
let khachHangDuocXuLy = hangChoHoTro.shift();

console.log(khachHangDuocXuLy);
console.log(hangChoHoTro);


//unshift: thêm phần tử vào đầu mảng
let danhSachUuTien = ["Bug thường", "bug giao dien"];
danhSachUuTien.unshift("Bug nghiem trong");

console.log(danhSachUuTien);

//join(): gộp tất cả phần tử thành 1 chuỗi
let tags = ["automation", "playwright", "javascript"];
let tagString = tags.join(", ");

console.log(tagString);

//indexOf(): trả ra index nếu tìm thấy, không tìm thấy trả ra -1
let danhSachMenu = ["Home", "About", "Service"];
console.log(danhSachMenu.indexOf("About"));

//bài tập
let gioHang = ["Bàn phím cơ", "Chuột gaming", "Màn hình 27inch", "Tai nghe bluetooth"];
//1. In ra tổng số sp
//2. In ra sp đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. Thêm 1 cái lót chuột vào cuối giỏ hàng

console.log(`Tổng số sản phẩm: ${gioHang.length}`);
console.log(`Sản phẩm đầu tiên: ${gioHang.shift()}`);
console.log(`Sản phẩm cuối cùng: ${gioHang.pop()}`);
gioHang.push("Lót chuột");
console.log(`Giỏ hàng mới: ${gioHang}`);

