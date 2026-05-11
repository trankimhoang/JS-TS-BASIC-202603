function taoMayChao(ten) {
     
}

//hinh thai 3: dung object co san scope ben ngoai

const testContext = {
    env: 'staging',
    retry: 0,
};

function taoLoggerKetQua() {

}

//bai tap
 

function taoBoDem(tenNut) {
    let soLanClick = 0;
    return {
        click() {
            soLanClick++;
            console.log(`${soLanClick} clicks`);
        },
        reset() {
            soLanClick = 0;
            console.log("reset Xong");
        }
    };
}
const nutLogin = taoBoDem("Login Button");
nutLogin.click();
nutLogin.click();
nutLogin.reset();
nutLogin.click();