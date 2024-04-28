import logo from './logo.svg';
import './App.css';
import {Bar} from 'react-chartjs-2';
import {chart} from 'chart.js/auto';

const labels=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dev'];
const options={
  plugins:{
    lengend:{
      position:'top'
    },
    title:{
      display:true,
      text:'Expense Tracker'
    }
  }
}
const data={
  labels,
  datasets:[
    {
      label:'2023 Expense',
      data:[10000,9000,8000,10200,10500,8400,13000,8900,14600,17000,9000,12500],
      backgroundColor:'grey'
    },
    {
      label:'2024 Expense',
      data:[17000,11000,12500,11000,12100,7500,13800,8100,9600,10000,11000,8000],
      backgroundColor:'pink'
    }
]
}

function App() {
  return (
    <div className="App" style={{'width':900,'margin':'auto'}}>
      <Bar options={options} data={data} />
      
    </div>
  );
}

export default App;
