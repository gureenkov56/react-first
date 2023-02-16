import { useState } from 'react';
import '../styles/style.scss';
import Footer from './part/Footer';
import Header from './part/Header';

function App() {

  const [colorMode, setColorMode] = useState(false);

  function changeMode(mode) {
    setColorMode(mode)
  }

  return (
    <div className={`App ${colorMode ? 'darkmode' : ''}`}>
      <Header setMode={changeMode} />
      <section className="content">
        page
      </section>
      <Footer/>
    </div>
  );
}

export default App;
