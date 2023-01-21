const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const toDay = new Date().toLocaleString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(toDay)

  if(dayExists){
    alert('Dia incluso ❌')
    return
  }

  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(toDay)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
/*
const data = {
  run: ["01-01", "01-03", "01-06"],
  water: ["01-03"],
  food: ["01-04"],
  studies: ["01-02", "01-04"]
}
*/

