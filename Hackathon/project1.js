// function calculateSpeed(startTime, endTime, typedText) {
//     const timeTaken = (endTime - startTime) / 60; // in seconds
//     const wordsTyped = typedText.trim().split(/\s+/).length;
//     const speed = (wordsTyped / timeTaken).toFixed(2);
//     return speed;
//   }

//   function calculateAccuracy(originalText, typedText) {
//     let correctChars = 0;
//     for (let i = 0; i < originalText.length; i++) {
//       if (originalText[i] === typedText[i]) {
//         correctChars++;
//       }
//     }
//     const accuracy = ((correctChars / originalText.length) * 100).toFixed(2);
//     return accuracy;
//   }

//   function startGame() {
//     const originalText = document.getElementById('original-text').innerText;
//     const startTime = new Date().getTime();
//     document.getElementById('typed-text').disabled = false;
//     document.getElementById('result').innerText = '';

//     document.getElementById('typed-text').addEventListener('input', function () {
//       const typedText = this.value;
//       if (typedText.length === originalText.length) {
//         const endTime = new Date().getTime();
//         const speed = calculateSpeed(startTime, endTime, typedText);
//         const accuracy = calculateAccuracy(originalText, typedText);
//         document.getElementById('result').innerText = `Your typing speed is ${speed} words per minute. Your accuracy is ${accuracy}%.`;
//         this.disabled = true;
//       }
//     });
//   }