const age = 20; 
const message = (age >= 18) ? "성인입니다." : "미성년자입니다";

let message2; 
if (age >= 18) {
  message2 = "성인입니다.";
} else {
  message2 = "미성년자입니다";
}

console.log(message);
console.log(message2);