const number = 10; 
const result = (number % 2 === 0) ? "짝수" : "홀수"; 
console.log(result);

const userRole = "admin";
const accessMessage = (userRole === "admin") ? "관리자 접근 허용" : "일반 사용자";
console.log(accessMessage);