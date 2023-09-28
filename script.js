window.addEventListener('DOMContentLoaded', ()=>{
 
    const inputText = document.getElementById('input-text');

const wordCount = document.getElementById('word-count');

const characterCount = document.getElementById('character-count');

const uniqueWords = document.getElementById('unique-words');

inputText.addEventListener('input', ()=>{
    const textValue = inputText.value.trim();

    const words = textValue === '' ? 0 : textValue.split(/\s+/).length;
    const characters = textValue.length;
    const uniqueWords = new Set(textValue.match(/\b\w+\b/g)).size;

    wordCount.innerHTML = 'word count: ' + words;

    characterCount.innerHTML = 'character count (including spaces): ' + characters;

    uniqueWords.innerHTML = 'unique words: ' + uniqueWords;
   
});

});

