const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300);
  const y = Math.floor(Math.random() * 300);
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${y}px`;
  noBtn.style.left = `${x}px`;
});

yesBtn.addEventListener('click', () => {
  window.location.href = 'yes_page.html';
});
