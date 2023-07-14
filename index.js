const mainToBeRemoved = document.getElementById("main")

mainToBeRemoved.remove()

const newH1 = document.createElement('h1')

newH1.id = "victory"

newH1.textContent = "Teddy is the champion"

document.body.appendChild(newH1)

const newHeader = document.getElementById('victory')