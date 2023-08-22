
const inputText = document.getElementById('inputText');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    
    
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    wordCount.textContent = words.length;

    
    const sentences = text.split(/[.!?]/).filter(sentence => sentence !== '');
    sentenceCount.textContent = sentences.length;
});