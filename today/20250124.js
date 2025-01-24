try {
  let num = 0;
  console.log(num.toUpperCase());
} catch (error) {
  console.log("에러 발생:", error.message);
} finally {
  console.log("이 코드는 항상 실행됩니다.");
}
