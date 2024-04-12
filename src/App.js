import { useEffect, useState } from 'react';
import './App.css';
import HeaderBox from './components/HeaderBox';
import ListItem from './components/ListItem';
import Pagination from './components/Pagination';
import Ellipse from './components/Ellipse';
import BarGraph from './components/BarGraph';

function App() {
  const[expenseItem, setExpenseItem] = useState([
    { title: 'Samosa', price: 150, category:'food', date: 'March 20, 2024' },
      { title: 'Movie', price: 300, category:'Fun', date: 'March 21, 2024' },
      { title: 'Auto', price: 50, category:'travel', date: 'March 22, 2024' },
  ])
  useEffect(() => {
    localStorage.setItem('Wallet Balance', 4500)
    localStorage.setItem('Expenses', 500)
    localStorage.setItem('ExpenseItem', expenseItem)

  }, [])
  const data = expenseItem.map((el)=>({name:el.category, value:el.price}))
  return (
    <div className="App">
      <div className='title'>
        <h1>Expense Tracker</h1>
      </div>
      <header className='header'>
        <div className='headerBoxContainer'>
          <HeaderBox balanceType={'Wallet Balance'} />
          <HeaderBox balanceType={'Expenses'} />
        </div>
        <Ellipse data={data} />
      </header>
      <div className='bodyContainer'>
        <div className='boxBody'>
          <div className='transactions'>
            {expenseItem.map((el, i) => <ListItem title={el.title} price={el.price} date={el.date} />)}
            <Pagination />
          </div>
          <div className='barContainer'>
            <BarGraph data={data}/>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
