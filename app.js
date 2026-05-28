function processText() {
    const input = document.getElementById('inputText').value;
    const resultArea = document.getElementById('resultArea');
    const outputList = document.getElementById('outputList');
    
    // Stats elements
    const statTotal = document.getElementById('statTotal');
    const statUnique = document.getElementById('statUnique');

    if (!input.trim()) {
        alert("Please enter some text first!");
        return;
    }

    // Smart Splitter: แยกคำและลบอักขระพิเศษออก
    const allWords = input
        .split(/[\s,;\n\t]+/)
        .map(word => word.replace(/[^\w\sก-๙]/g, '').trim())
        .filter(word => word.length > 0);

    const uniqueWords = [...new Set(allWords)];

    // Update Stats
    statTotal.innerText = allWords.length;
    statUnique.innerText = uniqueWords.length;

    // แสดงผล
    outputList.innerText = uniqueWords.join('\n');
    
    // Show Result Area with Animation
    resultArea.classList.remove('hidden');
    resultArea.classList.add('animate-fade-in');
}

function copyToClipboard() {
    const text = document.getElementById('outputList').innerText;
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        btn.classList.replace('bg-slate-800', 'bg-green-600');
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace('bg-green-600', 'bg-slate-800');
        }, 2000);
    });
}

function downloadTxt() {
    const text = document.getElementById('outputList').innerText;
    if (!text) return;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vocabulary_list.txt';
    a.click();
}

function clearAll() {
    document.getElementById('inputText').value = '';
    document.getElementById('resultArea').classList.add('hidden');
}
