// Lesson 3 - Events Starter
function addQuoteToDOM(quote) {}
function updateQuoteInDOM(quote) {}
function deleteQuoteFromDOM(id) {}
function renderQuotes() {}
function showRandomQuote() {}
// Event listeners for form submission, edit, and delete clicks


import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

const toInt = (v) => Number.parseInt(v, 10)
const clearForm = () => {
  form.reset()
  idInput.value = ''
}

export function createQuoteElement(quote) {
  const wrapper = document.createElement('div')
  wrapper.dataset.id = String(quote.id)

  const contentP = document.createElement('p')
  contentP.textContent = quote.content

  const authorP = document.createElement('p')
  authorP.textContent = quote.author

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.dataset.id = String(quote.id)
  editBtn.type = 'button'
  editBtn.textContent = 'Edit'

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete-btn'
  deleteBtn.dataset.id = String(quote.id)
  deleteBtn.type = 'button'
  deleteBtn.textContent = 'Delete'

  editBtn.addEventListener('click', () => {
    const id = toInt(editBtn.dataset.id || '')
    const current = getAllQuotes().find((q) => q.id === id)
    if (!current) return
    idInput.value = String(current.id)
    contentInput.value = current.content
    authorInput.value = current.author
    contentInput.focus()
  })

  deleteBtn.addEventListener('click', () => {
    const id = toInt(deleteBtn.dataset.id || '')
    const idx = deleteQuote(id)
    if (idx !== -1) {
      deleteQuoteFromDOM(id)
      if (idInput.value && toInt(idInput.value) === id) clearForm()
    }
  })

  wrapper.append(contentP, authorP, editBtn, deleteBtn)
  return wrapper
}

export function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote)
  quoteList.appendChild(el)
}

export function updateQuoteInDOM(quote) {
  const el = quoteList.querySelector(`div[data-id="${quote.id}"]`)
  if (!el) return
  const [contentP, authorP] = el.querySelectorAll('p')
  if (contentP) contentP.textContent = quote.content
  if (authorP) authorP.textContent = quote.author
}

export function deleteQuoteFromDOM(id) {
  const el = quoteList.querySelector(`div[data-id="${id}"]`)
  if (el && el.parentElement) el.parentElement.removeChild(el)
}

export function renderQuotes() {
  quoteList.innerHTML = ''
  const all = getAllQuotes()
  for (const q of all) addQuoteToDOM(q)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const idVal = idInput.value.trim()

  if (!content || !author) return

  if (idVal) {
    const id = toInt(idVal)
    const updated = updateQuote(id, content, author)
    if (updated) updateQuoteInDOM(updated)
  } else {
    const created = addQuote(content, author)
    if (created) addQuoteToDOM(created)
  }
  clearForm()
})

export function showRandomQuote() {
  const all = getAllQuotes()
  if (!all || all.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --'
    return
  }
  const idx = Math.floor(Math.random() * all.length)
  const q = all[idx]
  randomDisplay.textContent = `"${q.content}" — ${q.author}`
}

randomBtn.addEventListener('click', showRandomQuote)

renderQuotes()
