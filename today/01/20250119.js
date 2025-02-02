const sentence = "Hello, JavaScript is fun";

console.log(sentence.includes('JavaScript'));
console.log(sentence.includes('java'));
console.log(sentence.includes('Hello'));

const roles = ['admin', 'editor', 'viewer'];

if (roles.includes('admin')) {
    console.log('관리자 권한이 있습니다.');
}

const message = "오늘 날씨가 참 좋네요.";

if (message.includes('날씨')) {
    console.log('날씨와 관련된 메세지입니다.');
}