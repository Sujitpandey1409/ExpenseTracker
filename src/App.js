import './App.css';
import HeaderBox from './components/HeaderBox';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Expense Tracker</h1>
      </div>
      <header className='header'>
        <div className='headerBoxContainer'>
          <HeaderBox balanceType={'Wallet Balance'}  />
          <HeaderBox balanceType={'Expenses'}  />
        </div>
      </header>
      <div className='bodyContainer'>
        <div className='boxBody'>
          <div className='transactions'><ListItem /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
