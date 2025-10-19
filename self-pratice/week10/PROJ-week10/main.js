 document.addEventListener('DOMContentLoaded', () => {
  const fontColor = document.getElementById('fontColor')
  const bgColor = document.getElementById('bgColor')
  const fontSize = document.getElementById('fontSize')
  const preview = document.getElementById('preview') 
  const form = document.getElementById('preferencesForm')
  const saveBtn = document.getElementById('saveBtn');

function applyPreferences(bg, color, size) {
    if (bg) {
      preview.style.backgroundColor = bg;
    }
    if (color) preview.style.color = color;

    if (size === 'small') preview.style.fontSize = '14px';
    else if (size === 'medium') preview.style.fontSize = '18px';
    else if (size === 'large') preview.style.fontSize = '24px';
    else  preview.style.fontSize = '16px';
  }

bgColor.addEventListener('input', (e) => {
    preview.style.backgroundColor = e.target.value
});

// ทดลองเขียนในรูปแบบของ Function
function updateColor(event) {
  const p = document.querySelector("#preview-exmaple");
  if (p) {
    p.style.color = event.target.value;
  }
}
fontColor.addEventListener("input", updateColor)


fontSize.addEventListener('change', (e) => {
  const size = e.target.value

  if (size === 'small') {
    preview.style.fontSize = '14px'
  } else if (size === 'medium') {
    preview.style.fontSize = '18px'
  } else if (size === 'large') {
    preview.style.fontSize = '24px' 
  } else {
    preview.style.fontSize = '16px'
  }
})

const savedBg = localStorage.getItem('bgColor');
const savedFontColor = localStorage.getItem('fontColor');
const savedFontSize = localStorage.getItem('fontSize');

  if (savedBg) bgColor.value = savedBg;
  if (savedFontColor) fontColor.value = savedFontColor;
  if (savedFontSize) fontSize.value = savedFontSize;

applyPreferences(savedBg, savedFontColor, savedFontSize);

saveBtn.addEventListener('click', () => {

    const bg = bgColor.value
    const color = fontColor.value
    const size = fontSize.value

    localStorage.setItem('bgColor', bg)
    localStorage.setItem('fontColor', color)
    localStorage.setItem('fontSize', size)

    applyPreferences(bg, color, size)

    alert('Save Success')
  })

form.addEventListener('reset', () => {
  localStorage.clear()

  preview.style.backgroundColor = '#ffffff'
  preview.style.color = '#222222'
  preview.style.fontSize = '16px'

  alert('Reset Success')
})})