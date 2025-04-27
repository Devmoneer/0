document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    const submitBtn = document.getElementById('submit-btn');
    const correctCode = "1234567"; // کۆدی ڕاست

    // پشکنین بکە ئەگەر پێشتر چالاککراوە (ئەگەر نەگەڕێتەوە)
    if (localStorage.getItem('activated') === 'true') {
        window.location.replace('home.html');
    }

    // کلیککردن بۆ دوگمە
    submitBtn.addEventListener('click', function() {
        if (codeInput.value === correctCode) {
            localStorage.setItem('activated', 'true'); // تۆمارکردنی چالاککردن
            window.location.replace('home.html'); // گواستنەوە بێ مێژووی گەڕانەوە
        } else {
            alert("کۆدەکە هەڵەیە!");
            codeInput.value = '';
        }
    });

    // کییی Enter (هەروەک پێشتر)
    codeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitBtn.click(); // وەک کلیککردنی دوگمە مامەڵە بکە
        }
    });
});