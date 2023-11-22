import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
