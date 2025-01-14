// 암호화 함수 (문자 치환)
function encrypt(text, key) {
    return text.split("").map(char => String.fromCharCode(char.charCodeAt(0) + key)).join("");
}

// 복호화 함수 
function decrypt(encryptedText, key) {
    return encryptedText.split("").map(char => String.fromCharCode(char.charCodeAt(0) - key)).join("");
}

// 테스트 데이터 
const key = 3; 
const plainText = "Hello, World!";

// 암호화 
const encryptedText = encrypt(plainText, key);
console.log("Encrypted Text:", encryptedText);

// 복호화 
const decryptedText = decrypt(encryptedText, key);
console.log("Decrypted Text:", decryptedText);

