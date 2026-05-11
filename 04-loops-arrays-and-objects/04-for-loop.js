//vòng lặp for - lặp lại có cấu trúc
//1. Vòng lặp for cổ điển
for (let i = 1; i < 5; i++) {
    console.log('Đang chạy vòng thứ:', i);
}

//ví dụ
let soLuongAccount = 3;

for (let i = 1; i <= soLuongAccount; i++) {
    let emailTest = `người dùng ${i}@gmail.com`;
    console.log(`Đã tạo account thứ ${i}: ${emailTest}`);
}

//duyệt array bằng index
let sanPham2 = ["quần đùi", "áo cộc", "váy"];

for (let i = 0; i < sanPham2.length; i++) {
    console.log(`Sản phẩm ${i + 1} : ${sanPham2[i]}`);
    
}

//duyệt qua object
let config2 = {
    browse: "Chrome",
    timeout: 2000,
    headless: true,
};

let keys = Object.keys(config2);

//chú ý: object không dùng được for cổ điển
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = config2[key];
    console.log(`${key}: ${value}`);
}

//mình muốn tạp nhanh 5 mã đơn hàng để test màn hình quản lý đơn hàng
//dữ liệu đầu vào
let soLuongDon = 5;

//yêu cầu
//1. Dùng for cổ điển lập từ 1 -5
//mỗi vòng tạo biến maDonHang

for (i = 1; i <= soLuongDon; i++) {
    let maDonHang = `ORDER-${i}`;
    console.log(maDonHang);
}

//vòng lặp for...of
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

//duyệt String
let matKhau = 'neko1234';

for (let kiTu of matKhau) {
    console.log(`Kí tự ${kiTu}`);
}

//duyệt array có object
let danhSachUser = [
    { ten: "Neko", role: 'admin'},
    { ten: "Neko2", role: 'guest'},
    { ten: "Neko3", role: 'user'},
];

for (let user of danhSachUser) {
    console.log(`${user.ten} - Quyền ${user.role}`);
}

//duyệt object bằng for...of
let config = {
    browse: "chrome",
    timeout: 2000,
    headless: true,
}

for (let cap of Object.entries(config)) {
    console.log(`${cap[0]} - ${cap[1]}`);
}

// bài tập nhỏ
let danhSachUrl = ["/login", "/dashboard", "/profile"];
//dùng for of
for (let url of danhSachUrl) {
    console.log(`Đang kiểm tra: ${url}`);
}

//vòng lặp for...in (dành riêng cho object)
for (let key in config) {
    console.log(`${key} - ${config[key]}`);
    
}

//ví dụ
let products = [
    {ten: "iphone", gia: 200000},
    {ten: "airpod", gia: 300000},
    {ten: "macbook", gia: 10000},
];

//sd for of + for in để in ra tên và giá của sp
//mỗi lần lập cần có daúa --- phân cách giữa sp ở đầu ra

for (let product of products) {
    for (let key in product) {
        console.log(`${key}: ${product[key]}`);
    }
    console.log("---");
}

//break
//từ 1 -> 100 mình muốn tìm số chia hết cho 7 đầu tiên
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`Số đầu tiên chia hết cho 7 là: ${i}`);
        break;
    }
}

//vd2
let sanPhams = [
    { ten: "iphone", conHang: true},
    { ten: "airpod", conHang: false},
    { ten: "macbook", conHang: true},
];
//tìm sản phẩm hết hàng đầu tiên
for (let product of sanPhams) {    
    if (product.conHang === false) {
        console.log(`Sản phẩm hết hàng đầu tiên là: ${product.ten}`);
        break;
    }
}
    
//continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Số lẻ: ${i}`);
}

//bỏ qua sản phẩm hét hàng
for (let product of sanPhams) {
    if (product.conHang === false) {
        continue;
    }
    console.log(`Sản phẩm còn hàng: ${product.ten}`);
}

//bai tạp
let userInfo = {
    ten: "neko",
    email: "neko@gmail.com",
    password: "abc123",
    role: "admin",
};

//dùng includes và continue trong array để bỏ qua các field nhạy cảm dựa trên array fielAndi -> in ra key va value hợp lệ

let fielAndi = ["password"];

for (let key in userInfo) {
    if (fielAndi.includes(key)) {
        continue;
    }
    console.log(`${key}: ${userInfo[key]}`);
}

//ví dụ đang test trang TIKI, lấy được danh sách giá 6 sản phẩm, yêu cầu lọc ra những sp có giá lớn 100k và đếm xem có bao nhiu sp là sp vip
let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000];
//yêu cầu:
//1. tạo 1 array rỗng danhSachVip
//nếu giá > 100000 thì ta cho sp vào danh sách vip
//và làm tiếp yêu cầu đề bài là in ra ds vip và số lượng
let danhSachVip = [];

for (let gia of danhSachGia) {
    if (gia < 100000) {
        continue;
    }
    danhSachVip.push(gia);
}

console.log(`Danh sách sản phẩm vip: ${danhSachVip}`);
console.log(`Số lượng sản phẩm vip: ${danhSachVip.length}`);
