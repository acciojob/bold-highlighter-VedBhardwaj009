function highlight() {
    // Get all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change its color to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Get all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and revert its color to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
