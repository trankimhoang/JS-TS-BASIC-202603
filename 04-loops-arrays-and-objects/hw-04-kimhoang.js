// "Bài 1
// Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

// Dữ liệu đầu vào:

// let apiResponse = {
//     userId: 101,
//     username: "neko_tester",
//     email: null,
//     isActive: "true",  // Bug: phải là boolean, không phải string
//     phone: "",
//     role: "admin"
// };

// Yêu cầu:

// Với mỗi key, kiểm tra:
// Giá trị có phải null hoặc "" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
// Nếu key là "isActive", kiểm tra typeof có phải "boolean" không? → In cảnh báo sai kiểu.
// Đếm tổng số lỗi tìm được.
// Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra."	

let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin",
};

let countBug = 0;
for (let [key, value] of Object.entries(apiResponse)) {
    if (value === null || value === "") {
        console.log(`Key ${key} giá trị rỗng`);
        countBug++;
    }

    if (key === "isActive" && typeof value !== "boolean") {
        console.log(`Key ${key} sai kiểu dữ liệu`);
        countBug++;
    }
}

console.log(`Tổng số lỗi: ${countBug}`);
// "
// Bài 2
// Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.

// Dữ liệu đầu vào:

// let testUrls = [
//     { url: "/api/users", status: 200 },
//     { url: "", status: null },
//     { url: "/api/products", status: 200 },
//     { url: "/api/orders", status: 500 },
//     { url: "/api/reviews", status: 200 }
// ];
// Yêu cầu:

// Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
// Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
// Nếu bình thường → in kết quả PASS.
// Đếm tổng URL đã test được (không tính URL bị bỏ qua)."

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];

let countUrl = 0;
for (let url of testUrls) {
    if (url.url === "") {
        console.log(`URL rỗng`);
        continue;
    }
    if(url.status === 500) {
        console.log(`url: ${url.url}: Lỗi nghiêm trọng`);
        countUrl++;
        break;
    }
    console.log(`url: ${url.url}: PASS`);
    countUrl++;
}

console.log(`Tổng số URL đã test được: ${countUrl}`);

// Tình huống:
// Bạn viết script test API /orders/1. Cần kiểm tra dữ liệu trả về có hợp lệ không (thiếu dữ liệu, sai kiểu, sai logic).

// Dữ liệu đầu vào:
// let orderResponse = {
//     orderId: 5001,
//     amount: "150000",     // Bug: phải là number
//     currency: "VND",
//     isPaid: "false",      // Bug: phải là boolean
//     items: [],            // Bug: không được rỗng
//     createdAt: null       // Bug: không được null
// };
// Yêu cầu:
// Với mỗi key:
// Nếu giá trị là null hoặc "" → in cảnh báo "field rỗng".
// Nếu key là amount → phải là number, sai thì báo lỗi.
// Nếu key là isPaid → phải là boolean, sai thì báo lỗi.
// Nếu key là items:
// Nếu là mảng rỗng → báo lỗi "không có sản phẩm".
// Đếm tổng số lỗi (mỗi vi phạm = 1 lỗi).

let orderResponse = {
    orderId: 5001,
    amount: "150000",     // Bug: phải là number
    currency: "VND",
    isPaid: "false",      // Bug: phải là boolean
    items: [],            // Bug: không được rỗng
    createdAt: null
};

let errorCount = 0;

for (let [key, value] of Object.entries(orderResponse)) {
    if(value === null || value === "") {
        console.log(`Trường ${key} có giá trị rỗng`);
        errorCount++;
    }
    if (key === "amount" && typeof value !== "number") {
        console.log(`Truong ${key} sai kieu du lieu`);
        errorCount++;
    }
    if (key === "isPaid" && typeof value !== "boolean") {
        console.log(`Truong ${key} sai kieu du lieu`);
        errorCount++;
    }
    if (key === "items" && value === []) {
        console.log(`Truong ${key} khong co san pham`);
        errorCount++;
    }
}

console.log(`Tong so loi tim duoc: ${errorCount}`);
