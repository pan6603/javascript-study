// 비대칭 키 생성, 암호화 및 복호화 예제
(async function () {
    // 1. RSA 키 쌍 생성
    const keyPair = await window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 2048, // 키 길이 (2048비트 권장)
            publicExponent: new Uint8Array([1, 0, 1]), // 일반적인 값 (65537)
            hash: "SHA-256", // 해시 알고리즘
        },
        true, // 내보내기 가능 여부
        ["encrypt", "decrypt"] // 공개키: encrypt, 개인키: decrypt
    );

    // 공개키와 개인키
    const publicKey = keyPair.publicKey;
    const privateKey = keyPair.privateKey;

    console.log("Public Key:", publicKey);
    console.log("Private Key:", privateKey);

    // 2. 암호화 (공개키 사용)
    async function encryptMessage(plainText, key) {
        const encoded = new TextEncoder().encode(plainText); // 텍스트를 바이트로 변환
        const encrypted = await window.crypto.subtle.encrypt(
            {
                name: "RSA-OAEP",
            },
            key,
            encoded
        );
        return btoa(String.fromCharCode(...new Uint8Array(encrypted))); // Base64로 변환
    }

    // 3. 복호화 (개인키 사용)
    async function decryptMessage(encryptedText, key) {
        const encryptedBytes = Uint8Array.from(atob(encryptedText), c =>
            c.charCodeAt(0)
        );
        const decrypted = await window.crypto.subtle.decrypt(
            {
                name: "RSA-OAEP",
            },
            key,
            encryptedBytes
        );
        return new TextDecoder().decode(decrypted); // 바이트를 텍스트로 변환
    }

    // 4. 테스트
    const plainText = "Hello, Asymmetric Key!";
    console.log("Plain Text:", plainText);

    try {
        // 암호화
        const encryptedText = await encryptMessage(plainText, publicKey);
        console.log("Encrypted Text:", encryptedText);

        // 복호화
        const decryptedText = await decryptMessage(encryptedText, privateKey);
        console.log("Decrypted Text:", decryptedText);
    } catch (error) {
        console.error("Error:", error);
    }
})();

