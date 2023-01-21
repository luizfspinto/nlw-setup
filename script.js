const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-03", "01-06"],
  water: ["01-03"],
  food: ["01-04"],
  studies: ["01-02", "01-04"]
}

nlwSetup.setData(data)
nlwSetup.load()
