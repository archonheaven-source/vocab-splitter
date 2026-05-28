function processText() {
    const input = document.getElementById('inputText').value;
    const resultArea = document.getElementById('resultArea');
    const outputList = document.getElementById('outputList');
    const wordCount = document.getElementById('wordCount');

    if (!input.trim()) {
        alert("กรุณาใส่ข้อความก่อนครับลูกพี่!");
        return;
    }

    // แยกคำด้วย Regex (ตัดช่องว่าง, คอมม่า, เซมิโคลอน, ขึ้นบรรทัดใหม่)
    const words = input
        .split(/[\s,;\n\t]+/)
        .filter(word => word.length > 0);

    // ลบคำซ้ำ
    const uniqueWords = [...new Set(words)];

    // แสดงผล
    outputList.innerText = uniqueWords.join('\n');
    wordCount.innerText = `รวมทั้งหมด: ${uniqueWords.length} คำ`;
    resultArea.classList.remove('hidden');
}

function copyToClipboard() {
    const text = document.getElementById('outputList').innerText;
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
        alert("คัดลอกลง Clipboard แล้วครับ!");
    });
}