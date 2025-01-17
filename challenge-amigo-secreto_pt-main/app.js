let listFriend = []

const insertFriend = () => {
  const name = document.getElementById("amigo").value
  name === "" ? alert("Por favor, insira um nome.") : ""
  listFriend.push(name)
  document.getElementById("amigo").value = ""
  return listFriend
}

const updateListFriend = () => {
  const list = document.getElementById("listaAmigos")
  list.innerHTML = ""
  for (let i = 0; i < listFriend.length; i++) {
    list.innerHTML += `<li>${listFriend[i]}</li>`
  }
}

const drawFriend = () => {
  listFriend.length === 0 ? alert("Por favor, adicione amigos.") : ""
  const random = Math.floor(Math.random() * listFriend.length)
  const result = document.getElementById("resultado")
  random === 0 ? drawFriend() : ""
  result.innerHTML = `O amigo secreto é: <strong>${listFriend[random]}</strong>`
}

window.onload = () => {
  updateListFriend()
}

const addFriend = () => {
  insertFriend()
  updateListFriend()
  document.getElementById("amigo").focus()
}

const sortedFriend = () => {
  drawFriend()
}
