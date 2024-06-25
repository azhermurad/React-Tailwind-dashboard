import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import MainLayout from './components/layout/MainLayout';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                {/* all other screen componet add here */}
            </Routes>
        </MainLayout>
    );
}

export default App;
