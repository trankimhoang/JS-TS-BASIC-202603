// Dữ liệu đầu vào:										
										
// let rawProjectName = "   Neko CRM   ";										
// let rawEnvName = "   ";										
// let rawPassRate = "82";										
// let rawHasReport = "true";										
// let rawCriticalMessage = "   ";										
// let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"
									
// Yêu cầu:										
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.										
// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.										
// Ép rawPassRate sang Number.										
// Ép rawHasReport sang Boolean đúng cách.										
										
// Tạo hasCriticalBug theo quy tắc:										
// nếu message là null hoặc undefined -> false							
// nếu sau trim() là rỗng -> false								
// ngược lại -> true							
// Dùng if / else if để xếp hạng:								
// >= 95 -> "EXCELLENT"						
// >= 80 -> "GOOD"					
// >= 60 -> "NEEDS IMPROVEMENT"								
// còn lại -> "CRITICAL"								

// Dùng switch/case để gán tên engine cho browserUsed:							
// chrome -> "Chromium"										
// edge -> "Chromium"										
// firefox -> "Gecko"										
// safari -> "WebKit"										
// Nếu không khớp -> "Unknown"										
										
// Dùng toán tử 3 ngôi để tạo message cho report:										
// nếu hasReport là true -> "Có report"										
// ngược lại -> "Chưa có report"										
										
// Tạo isReadyToRelease theo quy tắc:										
// nếu pass rate dưới 80 -> false										
// nếu có critical bug -> false										
// nếu chưa có report -> false										
// còn lại -> true										
// In báo cáo ra console.										
										
// Expected output										
// Project:         Neko CRM										
// Environment:     Development										
// Browser:         chrome										
// Engine:          Chromium										
										
// Pass Rate:       82.00%										
// Grade:           GOOD										
// Report:          Có report										
// Critical Bug:    Không có bug nghiêm trọng										
										
// Ready:           YES

let rawProjectName = "   Neko CRM   ";										
let rawEnvName = "   ";					
let rawPassRate = "82";								
let rawHasReport = "true";								
let rawCriticalMessage = "   ";										
let browserUsed = "chrome";

let projectName = rawProjectName.trim();
let envName = rawEnvName.trim();
let enviroment;

if (envName === "") {
    enviroment = "Development";
} else {
    enviroment = envName;
}

//console.log(enviroment);

//Ép rawPassRate sang Number
let passRate = Number(rawPassRate);
//console.log(typeof(passRate));

//Ép rawHasReport sang Boolean đúng cách.
let hasReport = Boolean(rawHasReport);
//console.log(typeof(hasReport));

let criticalMessage = rawCriticalMessage.trim();
let hasCriticalBug;

if (rawCriticalMessage === null || rawCriticalMessage === undefined) {
    hasCriticalBug = false;
} else if (criticalMessage === "") {
    hasCriticalBug = false;
} else {
    hasCriticalBug = true;
}

//console.log(hasCriticalBug);

let grade;

if (passRate >= 95) {
    grade = "EXCELLENT";
} else if (passRate >= 80) {
    grade = "GOOD";
} else if (passRate >= 60) {
    grade = "NEEDS IMPROVEMENT";
} else {
    grade = "CRITICAL";
}

//console.log(grade);

// Dùng switch/case để gán tên engine cho browserUsed:				
// chrome -> "Chromium"				
// edge -> "Chromium"				
// firefox -> "Gecko"				
// safari -> "WebKit"				
// Nếu không khớp -> "Unknown"

let engine;

switch (browserUsed) {
    case "chrome":
        engine = "Chromium"
        break;
    case "edge":
        engine = "Chromium"
        break;
    case "firefox":
        engine = "Gecko"
        break;
    case "safari":
        engine = "WebKit"
        break;
    default:
        engine = "Unknown"
        break;
}

//console.log(engine);

// Dùng toán tử 3 ngôi để tạo message cho report:			
// nếu hasReport là true -> "Có report"			
// ngược lại -> "Chưa có report"			

let reportMessage = hasReport ? "Có report" : "Chưa có report";
//console.log(reportMessage);

// Tạo isReadyToRelease theo quy tắc:		
// nếu pass rate dưới 80 -> false		
// nếu có critical bug -> false		
// nếu chưa có report -> false		
// còn lại -> true		
// In báo cáo ra console.	

let isReadyToRelease;

if (passRate < 80) {
    isReadyToRelease = false;
} else if (hasCriticalBug) {
    isReadyToRelease = false;
} else if (!hasReport) {
    isReadyToRelease = false;
} else {
    isReadyToRelease = true;
}

console.log(`Project: ${projectName}`);
console.log(`Environment: ${enviroment}`);
console.log(`Browser: ${browserUsed}`);
console.log(`Engine: ${engine}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log(`Report: ${reportMessage}`);
console.log(`Critical Bug: ${hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng"}`);
console.log(`Ready: ${isReadyToRelease ? "YES" : "NO"}`);




