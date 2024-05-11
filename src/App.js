
import Header from './components/Header';
//import Heart from './components/Heart';
import HeartsList from './components/HeartsList';
import './App.css';
const message2 = 'I ❤️ React'
//const message = 'Candy';



function App() {
  return ( 
    <>
      <Header msg2={message2} />
      <HeartsList />
      {/*<Heart msg={message} />*/}
    </>
  )
}

export default App;
