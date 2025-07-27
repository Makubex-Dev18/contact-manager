import { useState, useEffect } from 'react'
import { initializeApp } from './utils/initializer';
import SplashScreen from './components/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LocalContactsPage from './pages/LocalContactsPage';
import ContactDetailPage from './pages/ContactDetailPage';
import DemoPage from './pages/DemoPage';
import Counter from './components/Counter';

function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    async function startApp() {
      const result = await initializeApp(1000);
      setIsInitializing(result);
    }
    startApp();
  }, []);

  return (
    <>
      {isInitializing ? <SplashScreen isLoading={isInitializing} /> :
        (
          <>
          {/* <section className='w-50 mx-auto'>
          <Counter />
          </section> */}
          
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/local-contacts" element={<LocalContactsPage />} />
              <Route path="/contact/:id" element={<ContactDetailPage />} />
              <Route path="/demo" element={<DemoPage />} />
            </Routes>
          </Router>
          </>
        )
      }
    </>
  )
}

export default App
