//yếu tố 1:
let soLanClick = 1;

while (soLanClick <= 3) {

    //thuc hien hanh dong
    console.log(`Dang click lan thu ${soLanClick}`);

    //yeu to 3: bien dem
    soLanClick++;
}

console.log("da click xong 3 lan. Thoat vong lap");

//vi du
// let bungDoi = true;

// while (bungDoi === true) {
//     console.log("Dang an thit nuong");
    
// }

let miengThit = 5;

while (miengThit > 0) {
    console.log(`con ${miengThit} mieng`);
    miengThit--;
}

console.log("het thit roi");

//trong AT se co co che retry -> thu lai toi da N lan
//Viet code tim nut thanh toan, cu 1 giay tim 1 lan, tim toi lan thu 5 neu thay thi dung, neu qua 5 lan thi bao loi

let maxRetry = 5;
let currentRetry = 1;
let isFound = false;

while (isFound === false && currentRetry <= maxRetry) {
    console.log(`dang tim nut thanh toan tren man hinh `);
    //gia lap tim kien la cho ti le tim kiem < 0.8
    let toolGiaLap = Math.random();
    console.log(toolGiaLap);
    
    let searchResult = toolGiaLap > 0.8;

    if (searchResult === true) {
        isFound = true;
        console.log("Ngon! Da tim thay nut thanh toan. Bam click ngay");
        
    } else {
        console.log("Khong thay, chuan bi thu lai");
        currentRetry++;
    }
}

//xu ly ket qua
if (isFound === false) {
    console.log("Test fail");
}

//bai tap nho
//có 1 hệ thống đăng nhập -> rule: hệ thống cho phép nhập sai tối đa 3 lần, nếu nhập đúng trước khi hết lượt -> hiển thị thành công. Sai -> khóa tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;

//yêu cầu:
//dùng while để mô phỏng quá trình nhập mật khẩu (tối đa 3 lần)
//2. ở mỗi lần thử giả lập người dùng nhập mk bằng cách gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else)
//nếu nhập đúng in ra "Đăng nhập thành công"
//nếu nhập sai in ra "Sai mật khẩu"
//check sau khi thoat vong lap, kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra "Tài khoản bị khóa"
let soLanThu = 1;
let isLoginSuccess = false;
const matKhauNhap = "1234";
while (isLoginSuccess === false && soLanThu <= maxLanThu) {
    if (matKhauNhap === matKhauDung) {
        isLoginSuccess = true;
        console.log("Đăng nhập thành công fgggtrgt");
    } else {
        console.log("Sai mật khẩu");
        soLanThu++;
    }
}

if (isLoginSuccess === false) {
    console.log("Tài khoản bị khóa");
}