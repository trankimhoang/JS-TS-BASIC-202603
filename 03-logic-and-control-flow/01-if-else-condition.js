let password = "123456";

if (password.length >= 6) {
    console.log("password hop le");
} else {
    console.log("password khong hop le");
}

let age = 20;
let hasTicket = true;

let isValid = age >= 18 && hasTicket;

if (isValid) {
    console.log("duoc vao rap xem phim");
} else {
    console.log("khong duoc vao");
}

//ứng dụng ví dụ trong AT
//dữ liệu từ UI
let successMessage = "Đăng nhập thành công";

if (successMessage === "Đăng nhập thành công") {
    console.log("TEST PASS: Người dùng được vào trang chủ");
} else {
    console.log("TEST FAIL: Người dùng không được vào trang chủ");
}

//BT nhỏ
let loginStatus = "locked";
//1. nếu loginStatus === 'sucess' -> in 'TEst pass: login thành công'
//2. nếu loginStatus  === 'locked' -> 'Tài khoản bị khóa'
//3. Các TH còn lại -> in 'Test fail: login thất bại'

if (loginStatus === "success") {
    console.log("TEST PASS: login thành công");
} else if (loginStatus === "locked") {
    console.log("Tài khoản bị khóa");
} else {
    console.log("Test fail: login thất bại");
}

//toan tu 3 ngôi
//let bien = dieu kien ? gia trọ nếu đúng : gia tri neu sai

//vi du
let diem = 8;

let trangThai = diem >=5 ? "pass" : "fail";

console.log(trangThai);

//bai tap
let failedTests = 2;
let suiteStatus;
// let suiteStatus =
//   failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";
// YC -> viết lại đoạn code trên bằng if/else if/else
if (failedTests === 0) {
    suiteStatus = "PASS";
} else if (failedTests <= 2) {
    suiteStatus = "WARNING";
} else {
    suiteStatus = "FAIL";
}

console.log(suiteStatus);

//ví dụ
//check xem rawUserName có hợp lệ hay ko nếu rỗng là ko họp lệ và ngược lại
let rawUserName = "    ";
let userName = rawUserName.trim();

if (userName) {
    console.log("username hop le");
} else {
    console.log("username khong hop le");
}

//switch case
//vi du
let role = "admin";

switch (role) {
    case "admin":
        console.log("duoc vao trang admin");
        break;
    case "user":
        console.log("duoc vao trang user");
        break;
    default:
        console.log("loi role khong hop le");
}
