let loiChao = 'xin chao';
let loiChao2 = "xin chao 2";
let myName = "I'm Hoang";

const tenHocVien = "Hoang";

const loiGioiThieu = `Ten toi la ${tenHocVien}`;

console.log(loiGioiThieu);

const productName = "iphone 15 promax";

const productSelector = `h2:has-text("iphone 15 promax")`;
console.log(productSelector);

let tuoi = 30;

const PI = 3.14;

let ketQua = (tuoi - 5) * 2;

console.log(ketQua);

//booean true/false
let denDangBat = true;
let daTotNghiep = false;

//lenght do dai chuoi
let matKhau = "123456";
console.log(matKhau.length);

//trim() loai bo khoang trang thua o dau va cuoi chuoi
let emailWeb = "   kimhoang@gmail.com   ";

let emailChuan = emailWeb.trim();
console.log(emailChuan);
console.log(emailChuan.length);

//toUpperCase() viet hoa
let tenSanPham = 'iphOne 15';

console.log(tenSanPham.toLowerCase());
console.log(tenSanPham.toUpperCase());

//includes() so khop chinh xac tung ki tu
let thongBao = "Dang nhap that bai. Sai mat khau";

console.log(thongBao.includes('thanh cong'));
console.log(thongBao.includes('mat khau'));

let msg = "login Error: invalid password";
console.log(msg.includes('error'));
console.log(msg.includes('Error'));

//replace() thay the ki tu dau tien
let giaTien = "100$";
let giaTienSo = giaTien.replace('$', '');
console.log(giaTienSo);

let tien = "1.000.000";
console.log(tien.replace('.', ''));

//replaceAll() thay the tat ca cac ki tu
let tien2 = "1.000.000";
console.log(tien2.replaceAll('.', ''));

let tenUI = "Nguyen Van A";
console.log(tenUI.replaceAll(' ', ''));

//indexOf() tim vi tri xuat hien dau tien cua ki tu
let urlUI = "https://www.google.com/search?q=iphone+15+promax";
console.log(urlUI.indexOf('?'));

//substring() cat chuoi
let errorMsg = "Error 404: Page not found";
console.log(errorMsg.indexOf(':'));

console.log(errorMsg.substring(errorMsg.indexOf(':') + 2));


//slice() cat chuoi
let fileName = "report_20260329.pdf";
console.log(fileName.slice(-4));

//bai tap vi du lay ra ORD-2026-123
let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";

let textClean = rawText.trim();
let textStart = textClean.indexOf(":");
let textEnd = textClean.indexOf("|");

console.log(textStart);
console.log(textEnd);


let result = textClean.slice(textStart + 2, textEnd - 1);
console.log(result);

//ep kieu Number() ep kieu so nguyen
let so1 = '10';
let so2 = '20';
console.log(so1 + so2);
console.log(Number(so1) + Number(so2));

//ep kieu ParseInt() ep kieu so nguyen
let so3 = '100px'
console.log(parseInt(so1));
console.log(parseInt(so3));

//ep kieu ParseFloat() ep kieu so thap phan
let so4 = '20.5';
console.log(parseFloat(so3) + parseFloat(so4));

//toFixed() lam tron so thap phan
let giaSP = 19.999999999999996;
console.log(giaSP.toFixed(2));

//Math.random() so ngau nhien
let min = 50;
let max = 55;
let soLouong = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(soLouong);

//padStart() them ki tu vao dau chuoi
let maDonHang = '123';
console.log(maDonHang.padStart(4, '0'));

let orderNumber = 5; //chuyen thanh SP-00005

console.log('SP-' + orderNumber.toString().padStart(5, '0'));

console.log(`${orderNumber} helo`);
console.log(orderNumber + ' hello');

//bai tap vi du
let slug = " Playwright Basic First test "; // output: Playwright-basic-first-test

let slug1 = slug.trim();
let slug2 = slug1.toLowerCase();
console.log(slug2);
slug2 = slug2.replaceAll(' ', '-');
console.log(slug2);

//bai tap vi du
let amount = 9.5 // output "009.50"
console.log(amount.toFixed(2).padStart(6, '0'));

//bai tap vi du
let finalPrice = "54000000"; // output "54.000.000"
let result3 = finalPrice.slice(0, 2) + "." + finalPrice.slice(2, 5) + "." + finalPrice.slice(5, 8);
console.log(result3);

