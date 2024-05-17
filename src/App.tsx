import { ModalProvider } from './context/ModalContext';
import HomePage from './pages/homePage';

function App() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  );
}

export default App;
