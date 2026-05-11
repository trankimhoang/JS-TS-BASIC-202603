function dangNhap(taiKhoan, matKhau) {
    console.log(`Đăng nhập user: ${taiKhoan}`);
    console.log(`Đăng nhập password: ${matKhau}`);
    console.log('Click nút login');
}
console.log('TC01');
dangNhap("neko", "123456");

console.log('TC02');
dangNhap("adminNeko2", 'abc2')

function tinhTongTien(a, b) {
    const result = a + b;
    return result;
}

let tienThanhToan = tinhTongTien(100, 2);
console.log(tienThanhToan);

//ví dụ
function laySoMayMan() {
    return 8;
}

let ketQua = laySoMayMan();

function layTenHienThi() {
    return "Neko";
}

let tenHienThi = layTenHienThi();

function laAdult(tuoi) {
    return tuoi >= 18;
}

console.log(laAdult(20));
console.log(laAdult(6));

//ví dụ bài tập
//yêu cầu viết 1 hàm tên cleanPrice(rawString) hàm này nhận vào là 1 chuỗi giá tiền lấy từ UI
//ví dụ: giá: 25.000.000 VNĐ. Hàm phải tự động dọn dẹp và return về 1 số number nguyên
//ví dụ (25000000)
function cleanPrice(rawString) {
    const price = rawString.trim().replaceAll(".", "").replaceAll("VNĐ", "").replaceAll("Giá: ", "");
    return Number(price);
}

const sp1 = "Giá: 1.500.000 VNĐ";
const sp2 = "  250.000.000 VNĐ   ";
const sp3 = "";

console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

//
const utils = {
    lamSach: function (text) {
        return text.trim().toLowerCase();
    },
};

console.log(utils.lamSach("  Hello  "));


//func expresstion
// const tinhTongTien = function(a, b) {
//     return a + b;
// };

//arrow function
const tinhTongTienArrow = (a, b) => {
    return a + b;
};
console.log(tinhTongTienArrow(1, 2));


//rút gọn hơn
const tinhTongTienArrow2 = (a, b) => a + b;

//cách sử dụng thực tế
const sanPham = {
    ten: "Laptop",
    gia: 1000,

    //cách 1:
    hienThiExpresstion: function () {
        console.log(`${this.ten} - ${this.gia}`);
    },

    //cách 2:
    hienThiShortHand() {
        console.log(`${this.ten} - ${this.gia}`);
    },

    //cách 3:
    hienThiArrow: () => {
        console.log(`${this.ten} - ${this.gia}`);
    },
}

sanPham.hienThiExpresstion();
sanPham.hienThiShortHand();
sanPham.hienThiArrow();

//destructuring
const [user, pass, moiTruong] = ["admin", "123456", "staging"];

console.log(user);
console.log(pass);
console.log(moiTruong);

//bỏ qua phần tử ko cần
const [firstName, , city] = ["Neko", "25", "Hanoi"];

console.log(firstName)
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];

//giá trị mặc định
console.log(c);

//bài tập
// Ví dụ dữ liệu đầu vào
// Khi chạy automation test, ta nhận được một danh sách kết quả như sau:
const testRuns = [
    [
        " login smoke ",
        { browser: "   chromium   ", env: "  staging  " },
        "  PASS ",
    ],
    [
        " checkout payment ",
        { browser: "   firefox   ", env: "  prod  " },
        "  FAIL ",
    ],
    [
        " search product ",
        { browser: "   webkit   ", env: "  staging  " },
        "  PASS ",
    ],
    ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];
// Bài toán
// Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.
// Yêu cầu
// - Dùng destructuring để bóc tách từng phần tử trong mảng.
// - Gợi ý:
//   const [rawTestName, { browser, env }, rawStatus] = item
// - Tương ứng:
//   + rawTestName: tên test thô
//   + { browser, env }: thông tin môi trường chạy
//   + rawStatus: trạng thái test thô
// Rule xử lý
// - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// - Nếu dữ liệu hợp lệ:
//   + Tạo chuỗi theo định dạng: testName - browser - env
//   + Ví dụ: login smoke - chromium - staging
//   + Nếu PASS thì đưa vào mảng passed.
//   + Nếu FAIL thì đưa vào mảng failed.
// Kết quả mong đợi
// Hàm cần trả về dữ liệu theo dạng:
// {
//   totalValid: 3,
//   invalid: 1,
//   passed: [
//     "login smoke - chromium - staging",
//     "search product - webkit - staging"
//   ],
//   failed: [
//     "checkout payment - firefox - prod"
//   ]
// }

function taoBaoCaoTest(testRuns) {
    let totalValid = 0;
    let invalid = 0
    const passed = [];
    const failed = [];

    for (const item of testRuns) {
        const [rawTestName, { browser, env }, rawStatus] = item;
        const testName = rawTestName.trim();
        const status = rawStatus.trim();
        const browserClean = browser.trim();
        const envClean = env.trim();

        if (testName === "" || status !== "PASS" && status !== "FAIL") {
            invalid++;
            continue;
        }

        totalValid++;
        const testCase = `${testName} - ${browserClean} - ${envClean}`;

        if (status === "PASS") {
            passed.push(testCase);
        } else {
            failed.push(testCase);
        }
    }

    return {
        totalValid,
        invalid,
        passed,
        failed,
    };
}

console.log(taoBaoCaoTest(testRuns));

const mangGoc = [1, 2, 3, 4, 5];

// sao chep- ghi de
const configMacDinh = {
    baseUrl: "https://google.com",
    timeout: 30000,
    headless: true,
    retries: 2,
}

const configProd = {
    ...configMacDinh,
    baseUrl: "https://prod.google.com",
    retries: 0,
}

console.log(configProd);

const configDebug = { ...configMacDinh, headless: false };
console.log(configDebug);

//spread trong tham so ham
const danhSachGia = [1000, 2000, 3000];

const giaMax = Math.max(...danhSachGia);
console.log(giaMax);

// Bài toán
// Cho dữ liệu đầu vào như sau:
// Cấu hình mặc định của bài tập
const configMacDinhBaiTap = {
    baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
    timeout: 30000, // Thời gian chờ tối đa là 30 giây
    headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
    retries: 2, // Số lần thử lại khi có lỗi
};
// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
    timeout: 10000,
    headless: false,
};
// Danh sách tag mặc định
const tagsMacDinh = [" smoke  ", "  login "];
// Danh sách tag cần thêm
const tagsThem = ["  check out  ", "  smoke  ", "  regression "];
// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];
// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = "  Payment  Flow  ";
// Yêu cầu
// Viết hàm taoCauHinhChayTest().
// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.
// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.
// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường.
// - Làm sạch tenSuiteRaw.
// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".
// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.
// - Trả về object có dạng sau:
// Kết quả mong đợi
// {
//   suiteName: "Payment Flow",
//   config: {
//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//     timeout: 10000, // Thời gian chờ tối đa là 30 giây
//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//     retries: 2,
//   },
//   tags: ["smoke", "login", "checkout", "regression"],
//   slowestRespone: 3400
// }

function taoCauHinhChayTest() {
    const configCuoi = { ...configMacDinhBaiTap, ...configGhiDe };
    const tatCaTags = [...tagsMacDinh, ...tagsThem];
    let tagsDaLamSach = [];

    for (const tag of tatCaTags) {
        const cleanTag = tag.trim().toLowerCase();
        if (tag === "") {
            continue;
        }
        if (!tagsDaLamSach.includes(cleanTag)) {
            tagsDaLamSach.push(tag);
        }
    }
    const slowestRespone = Math.max(...tocDoPhanHoi);

    let tenSuite = tenSuiteRaw.trim().toLowerCase();
    if (tenSuite === "") {
        tenSuite = "unknown-suite";
    }

    const tagsDaLamSach = tatCaTags.reduce((acc, tag) => {
        const cleanTag = tag.trim().toLowerCase();
        if (cleanTag !== "" && !acc.includes(cleanTag)) {
            acc.push(cleanTag);
        }
        return acc;
    }, []);

    return {
        suiteName: tenSuite,
        config: configCuoi,
        tags: tagsDaLamSach,
        slowestRespone,
    }
}

console.log(taoCauHinhChayTest());




// function thongBaoKetQua(tenBaiTest, ketQua) {
//     console.log(`${tenBaiTest} - ${ketQua}`);
// }
// function thongBaoKetQua2(tenBaiTest, ketQua) {
//     console.log(`${tenBaiTest} - ${ketQua}22222`);
// }

//thongBaoKetQua("Login thanh cong", "PASS");

// thongBaoKetQua -> data type: function
function chayTest(tenTest, thongBaoKetQua) {
    console.log(typeof tenTest);
    console.log(typeof thongBaoKetQua);
    console.log(`bắt đầu chạy ${tenTest} `);

    // tinh ket qua
    const ketQua = "PASS";
    // end tinh ket qua


    thongBaoKetQua(ketQua, "Cai Nua");
}


// thang goi
chayTest("Login thanh cong", function (ketQua, themCaiNua) {
    // console.log(`${tenTest} - ${ketQua} Callback ve di`);
    if (ketQua == "PASS") {
        console.log("PASS ROI USER OI", themCaiNua);
    } else {
        console.log("FAIL ROI USER OI", themCaiNua);
    }
});

//vi du
function inThongBao() {
    console.log("đã đợi xong");
}
setTimeout(inThongBao, 5000);

//cách 2
setTimeout(function() {
    console.log("đã đợi xong");
}, 3000);

//cách 3: dùng arrow func
setTimeout(() => {
    console.log("đã đợi xong");
}, 3000);

//map
const giaSanPhamUI = [100000, 250000, 500000];
const giaMoi = giaSanPhamUI.map((gia, index) =>  {
    console.log(gia);    
    return gia * 2;
})

console.log(giaMoi);

//vi du 2 map
// const users = [
//     { ho: 'nguyen', ten: 'neko'},
//     { ho: 'tran', ten: 'new'},
//     { ho: 'le', ten: 'hoang'},
// ];

// const hoTen = users.map((user) => {
//     return `${user.ho} ${user.ten}`;
// });
// console.log(hoTen);

//filer => lọc phần tử thỏa mãn điều kiện
const sanPhamUI = [
    { ten: 'chuot', gia: 150000, tonKho: true },
    { ten: 'ban phim', gia: 500000, tonKho: false },
    { ten: 'man hinh', gia: 400000, tonKho: true },
];

//loc cac sp con hang
// const sanPhamConHang = [];
// for(const item of sanPhamUI) {
//     if (item.tonKho === false) {
//         continue;
//     }
//     sanPhamConHang.push(item);
// }
// console.log(sanPhamConHang);

//cach 2: xu ly bang filter()
const sanPhamConHangFilter = sanPhamUI.filter((sanPham) => {
    return sanPham.tonKho === true;
});
console.log('San pham con hang filter:', sanPhamConHangFilter);

//loc gia nho hon 200000
const giaNhoHon = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000;
});
console.log(giaNhoHon);

//ket hop nhiu dieu kien
// <200000 va con hang
const sanPhamGiaConHang = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000 && sanPham.tonKho === true;
})
console.log(sanPhamGiaConHang);

//find()
const users = [
    { id: 1, ten: 'neko', role: 'admin' },
    { id: 2, ten: 'new', role: 'tester' },
    { id: 3, ten: 'hoang', role: 'tester'},
];

//tìm phần tử có role là admin
const roleAdmin = users.find((user) => {
    return user.role === 'admin'
})
console.log(roleAdmin);

const roleTester = user.find((user) => {
    return user.role === 'tester';
});
console.log(roleTester);
















