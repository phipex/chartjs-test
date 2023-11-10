import './style.css'
import Chart from 'chart.js/auto';

const canvas = document.getElementById('myChart');

const button = document.getElementById("apostar");

const bet = document.getElementById("bet");

const salir = document.getElementById("salir");

let interval;
button.addEventListener("click", () => {
  console.log("bet.value",bet.value);
  if(!bet.value){
    alert("Ingrese el valor de la apuesta")
    return
  }
  interval = setInterval(addData,2000);
});

salir.addEventListener("click", () => {
  partida.salir()
});

const data = {
  labels: [],
  datasets: [{
    label: '# of Votes',
    data: [],
    borderWidth: 1,
    fill: 'origin'
  }],
  
}

const config = {
  type: 'line',
  options: {
    responsive: true,
    elements:{
      line: {
        tension : 0.4
      }
    }
  },
  data
}

class Partida{
  final
  step = 0
  steps = []
  selection;
  constructor(){
    this.final = Math.round(Math.random() * 15)
    
  }

  salir(){
    this.selection = this.steps[this.steps.length - 1]
  }

  nextValue(){
    if(this.step === this.final){
      throw new Error("la partida ha terminado")
      
    }
    this.step++
    const newValue = parseInt(Math.random() * 100, 10);
    this.steps.push(newValue)
    
    return newValue
  }
}
const chart = new Chart(canvas,config)
const partida = new Partida()

function addData(){
  console.log("addData")
  console.log("partida", partida)
  try {
    let dato = partida.nextValue()
    const data = chart.data;
    data.labels.push(dato)
    data.datasets.at(0).data.push(dato)
    chart.update()
  } catch (error) {
    console.dir(error)
    alert(error)
    clearInterval(interval)
  }

}

//setInterval(addData,2000)




