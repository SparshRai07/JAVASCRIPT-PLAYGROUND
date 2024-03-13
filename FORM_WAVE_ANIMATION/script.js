const labels = document.querySelectorAll('.form-control label');

for (const label of labels) {
  const innerText = label.innerText;
  const letterSpans = innerText.split('').map((letter, idx) => {
    return `<span style="transition-delay: ${idx * 70}ms">${letter}</span>`;
  });
  label.innerHTML = letterSpans.join('');
}




