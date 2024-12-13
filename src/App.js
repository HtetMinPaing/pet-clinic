import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ModalProvider from './storage/ModalContent';
import PatientProvider from './storage/PatientContent';

function App() {
  return (
    <PatientProvider>
      <ModalProvider>
        <div className="bg-pink-100">
          <Header />
          <HomePage />
        </div>
      </ModalProvider>
    </PatientProvider>
  );
}

export default App;
