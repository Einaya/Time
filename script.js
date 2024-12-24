function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();

// زر النسخ
document.getElementById('copyButton').addEventListener('click', function () {
  const hours = document.getElementById('hours').textContent;
  const minutes = document.getElementById('minutes').textContent;
  const seconds = document.getElementById('seconds').textContent;

  const currentTime = `${hours}:${minutes}:${seconds}`;

  navigator.clipboard.writeText(currentTime).then(() => {
    const message = document.getElementById('copyMessage');
    message.textContent = 'Time copied to clipboard!';
    message.classList.add('visible');

    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
      message.classList.remove('visible');
    }, 3000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});