console.log(document.cookie)
document.cookie = `theme=dark;exprires=${new date ()}`
console.log(document.cookie)




console.log(CookieUtil.get("theme"))
console.log(CookieUtil.get("color"))

CookieUtil.set('cardId', 'abc123', new Date(2025, 9, 1))
console.log(CookieUtil.get("cardID"))
console.log(document.cookie)

CookieUtil.unset("color")
console.log(document.cookies)