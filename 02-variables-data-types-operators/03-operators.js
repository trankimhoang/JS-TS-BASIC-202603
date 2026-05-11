//phep cong
console.log("10" + 5); //chuoi + so = chuoi
console.log(10 + 5); //so + so = so

//phep tru
console.log("10" - 5); //chuoi - so = so
console.log(10 - 5); //so - so = so

//phep nhan
console.log("10" * 5); //chuoi * so = so
console.log(10 * 5); //so * so = so

//phep chia lay du
console.log(10 % 3); //1

//bai tap
//tao bien isAgeValid de kiem tra tuoi >=18 hay ko
//tao bien isPasswordValid de kiem tra do dai password có dung 8 ki tu hay ko
//ket hop toan bo dieu kien de tao bien isSubmitButtonEnabled
let userAge = 20;
let passwordInput = "neko1234";
let isTermAccepted = true;

const isAgeValid = userAge >= 18;
console.log(isAgeValid);

const isPasswordValid = passwordInput.length === 8;
console.log(isPasswordValid);

const isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted;
console.log(isSubmitButtonEnabled);

let count = 0;
count++;

console.log(count);

//vi du minh dang test logic retry cua nut submit
//1 ban moi trong team viet doan code sau de vua login vưa giam/tang so lan thu

// let retries = 2;

// let firstLog = retries++;

// let secondLog = ++retries;

// let canRetry = retries-- > 3;

//doan output 4 dong
//viet lai theo cach ro rang
let retries = 2;
let firstLog = retries;
retries++;

++retries;

let secondLog = retries;

let canRetry = retries > 3;

console.log(firstLog);
console.log(secondLog);
console.log(canRetry);
console.log(retries);

// Bài tập
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên
let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";
//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả

let age = rawAge.trim();
age = Number(age.replace("tuổi", ""));

let ticketPrice = rawTicketPrice.trim();
ticketPrice = Number(ticketPrice.replace("đ", "").replace(".", ""));

let isValid = age > 18 && rawisVIP === "true";

if (isValid) {
    let finalPrice = ticketPrice * 0.7;
    console.log(finalPrice);
} else {
    let finalPrice = ticketPrice;
    console.log(finalPrice);
}


















