import './style.css'
import Chart from 'chart.js/auto';

const canvas = document.getElementById('myChart');


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
    responsive: true
  },
  data
}
const chart = new Chart(canvas,config)

function addData(){
  console.log("addData")
  let dato = parseInt(Math.random()*1000,10)
  const data = chart.data;
  data.labels.push(dato)
  data.datasets.at(0).data.push(dato)
  chart.update()
}

setInterval(addData,2000)

class Data{

}