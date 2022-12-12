import './App.css';
import { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('Home');

  function onNav(event) {   
    const target = event.target.dataset.target;
    if (target) {
        event.preventDefault();
        setPage(target);
    }
}
  return (
    <div className="app">
      <Header onNav={onNav}/>
      <Main onNav={onNav} page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
