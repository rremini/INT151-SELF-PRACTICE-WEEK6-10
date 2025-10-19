// ui.js
import { addQuote, getAllQuotes } from './quote.js'

// Step 1: Create an array to hold quote objects (เริ่มว่างไว้ก่อน)
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')

function addNewQuote(content, author) {
  return addQuote(content, author)
}

// Step 3: Define a function called renderQuotes()
// - Clear the quoteList element
// - Loop through the quotes array (ดึงสดจาก getAllQuotes เพื่อ sync state)
// - Create <p> "content" — author แล้ว append
function renderQuotes() {
  quotes = getAllQuotes()

  quoteList.innerHTML = ''

  for (const q of quotes) {
    const p = document.createElement('p')
    p.textContent = `"${q.content}" — ${q.author}`
    quoteList.appendChild(p)
  }
}

// Step 4: Add test quotes manually and call renderQuotes()
document.addEventListener('DOMContentLoaded', () => {
  addNewQuote('Keep your face to the sunshine and you can’t see a shadow.', 'NULL')
  addNewQuote('Live each day as if it’s your last.', 'UNDEFINED')
  addNewQuote('Life is like riding a bicycle. To keep your balance, you must keep moving.', 'UNKNOWN')

  renderQuotes()
})
