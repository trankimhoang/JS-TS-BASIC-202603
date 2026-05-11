// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."

const giaGocUI = " 1.000.000 đ ";
const phanTramGiam = 20;
const giaSauGiam = " 800.000 đ ";

let giaGoc = giaGocUI.trim();
giaGoc = giaGoc.replace("đ", "");
giaGoc = giaGoc.replaceAll(".", "");
giaGoc = Number(giaGoc);
console.log(typeof (giaGoc));

let giaMongDoi = giaGoc * (100 - 20) / 100;
console.log(giaMongDoi);

// Bài 2:														
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).

// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."														
// Dữ liệu đầu vào														
// "let tenSanPham = "   macbook pro m3   ";
// let giaGoc = "Price: 30,000,000 vnđ";
// let soLuong = "Sl: 2 máy";
// let maGiamGia = "DISCOUNT CODE: 10% OFF";														
// "Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:												
														
// HÓA ĐƠN THANH TOÁN - ID: #0002														
// Sản phẩm: MACBOOK PRO M3														
// Đơn giá: 30000000														
// Số lượng: 2														
// Tổng tiền (Gốc): 60000000														
// Giảm giá: 10%														
// THÀNH TIỀN: 54.000.000 VNĐ														

let tenSanPham = "   macbook pro m3   ";
let giaGoc2 = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

tenSanPham = tenSanPham.trim();
tenSanPham = tenSanPham.toUpperCase();
console.log(tenSanPham);

let indexStartDonGia = giaGoc2.indexOf(":") + 2;
let indexEndDonGia = giaGoc2.indexOf("v") - 1;

let donGia = giaGoc2.slice(indexStartDonGia, indexEndDonGia);
console.log(donGia);
donGia = donGia.replaceAll(",", "");
donGia = Number(donGia);
console.log(donGia);
console.log(typeof(donGia));

let indexStartSoLuong = soLuong.indexOf(":") + 2;
let indexEndSoLuong = soLuong.indexOf("m") - 1;

soLuong = soLuong.slice(indexStartSoLuong, indexEndSoLuong);
soLuong = Number(soLuong);
console.log(soLuong);

let tongTien = donGia * soLuong;
console.log(tongTien);

let indexStartGiamGia = maGiamGia.indexOf(":") + 2;
let indexEndGiamGia = maGiamGia.indexOf("%") + 1;

let giamGia = maGiamGia.slice(indexStartGiamGia, indexEndGiamGia);
console.log(giamGia);

let thanhTien = tongTien * (100 - Number(giamGia.replace("%", ""))) / 100;
thanhTien = thanhTien.toLocaleString("vi-VN");
console.log(thanhTien);



console.log("HÓA ĐƠN THANH TOÁN - ID: #0002");
console.log(`Sản phẩm: ${tenSanPham}`);
console.log(`Đơn giá: ${donGia}`);
console.log(`Số lượng: ${soLuong}`);
console.log(`Tổng tiền (Gốc): ${tongTien}`);
console.log(`Giảm giá: ${giamGia}`);
console.log(`THÀNH TIỀN: ${thanhTien} VNĐ`);




























