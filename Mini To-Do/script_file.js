let myForm = document.getElementById("myForm")
let myData = document.getElementById("myData")
let myList = document.getElementById("myList")
myForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(myData.value)
})

function createItem(x){
  let myHTML = `<li>${x} <button onclick = "deleteItem(this)">Delete</button></li>`
  myList.insertAdjacentHTML("beforeend", myHTML)
  myData.value = ""
  myData.focus()
}

function deleteItem(item){
  item.parentElement.remove()
}
