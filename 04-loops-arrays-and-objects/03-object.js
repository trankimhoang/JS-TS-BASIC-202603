let userTest = {
    hoTen: "Nguyen Van A",
    tuoi: 30,
    isVip: true,
    quyenHan: ["admin", "user"],
};
console.log(userTest);

let userTest2 = {
    hoTen: "Nguyen Van B",
    email: "neko@gmail.com",
};
let thongTinCanLay = "email";

console.log(userTest2.email);

let apiData = {
    "firstName": "John",
    "content-type": "application/json",
    "user-agent": "Playwright"
};

console.log(apiData["content-type"]);

//CRUD
let config = {
    browse: "Chrome",
    timeout: 5000,
};
console.log("Ban đầu:", config);

config.timeout = 10000;
console.log("Sau khi sửa timout:", config);

//thêm dữ liệu (gọi tên key chưa tồn tại + giá trị)
config.isHeadless = true;
console.log("Sau khi thêm headless:", config);

//xóa dữ liệu (dùng delete)
delete config.browse;
console.log("Sau khi xóa browse:", config);

//chú ý
const user3 = {
    ten: "neko",
};
//vẫn thêm xóa sửa được ruột bên trong, const chỉ cần bạn gán lại cả object bằng dấu bằng "="
user3.ten = "meo";
console.log("sau khi sửa tên:", user3);


//Các phương thức
//1. Object.keys() -> gom tất cả các key lại thành 1 mảng
let spTiki = {
    id: "SP01",
    ten: "Bàn phím",
    gia: 50000,
};

let danhSachKey = Object.keys(spTiki);
console.log(danhSachKey);

//2. Object.values() -> gom tất cả các value lại thành 1 mảng
let danhSachValue = Object.values(spTiki);
console.log(danhSachValue);
console.log(danhSachValue.includes("Bàn phím"));

//3. Object.entries() -> gom tất cả các key và value lại thành 1 mảng
let danhSachCap = Object.entries(spTiki);
console.log(danhSachCap);

//4. Object.hasOwn(object, key) -> kiểm tra key có phải của object không
console.log(Object.hasOwn(spTiki, "id2"));

//bài tập
let apiResponse = {
    userId: 9999,
    userName: "neko_auto",
    role: "admin",
    isActive: "yes",
};

//dùng objetc.keys để đếm xem api trả về bao nhiêu trường
//dùng Object.hasOwn để kiểm tra 3 trường require "userId", "email", "role"
//kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeOf) Nếu sai kiểu in ra cảnh báo
//dùng object.value + includes để kiểm tra xem có giá trị nào là "admin" không

console.log('Số trường:', Object.keys(apiResponse).length);
console.log('Có userId', Object.hasOwn(apiResponse, "userId"));
console.log('Có email', Object.hasOwn(apiResponse, "email"));
console.log('Có role', Object.hasOwn(apiResponse, "role"));
console.log('kiểu boolean:', typeof apiResponse.isActive === "boolean");
let role = Object.values(apiResponse);
console.log('có giá trọ admin:', role.includes("admin"));


//array of object
let danhSachUser = [
    { id: 1, ten: "teo1", role: "user1"},
    { id: 2, ten: "teo2", role: "user2"},
    { id: 3, ten: "teo3", role: "user3"},
];

