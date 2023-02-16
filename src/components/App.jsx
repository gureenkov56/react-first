import { useRef } from 'react';
import '../styles/style.scss';
import UserList from './UserList';
import Footer from './part/Footer';
import Header from './part/Header';

function App() {
  const app = useRef(null)

  return (
    <div className='App' ref={app}>
      <Header appNode={app}/>
      <section className="content">
        <UserList/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
