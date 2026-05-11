const user = {
    hoTen: 'neko',
    tuoi: 18,
    gioiThieu() {
        console.log(`Toi la ${this.hoTen}, ${this.tuoi} tuoi`);
        
    },
};

//khi goi user.gioiThieu() -> ler dung truoc dau cham = user -> this = user

user.gioiThieu();

//vd2
const sanPham = {
    ten: 'iphone 15',
    gia: 2000,
    soLuong: 10,
    inThongTin() {
        console.log(this);
        console.log(this.ten);
        console.log(this.gia);
    },

    giamGia(phanTram) {
        this.gia = this.gia * (1 - phanTram / 100);
        console.log(`${this.ten} sau giam gia: ${this.gia.toLocaleString()}d`);
        
    },
};

sanPham.inThongTin();
sanPham.giamGia(20);

//
const boDem = {
    ten: 'click counter',
    soLan: 0,
    dem() {
        this.soLan++;
        console.log(`${this.ten}: ${this.soLan} lan`);
    },
};

boDem.dem();

//gan method vao 1 bien moi
const hamTach = boDem.dem;
//luc nay hamTach chua cai ham, nhung da bi mat lien ket voi boDem -> giong nhu viec photocopy nhung ban copy ko biet thuoc ve ai
hamTach();
//This se bi mat khi truyen callback
function chayCallBack(callback) {
    callback();
}

chayCallBack(hamTach);