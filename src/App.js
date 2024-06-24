import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Header from './components/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen);
    }, [isSidebarOpen]);

    return (
        <Router>
            <div className='flex flex-col h-screen  overflow-hidden'>
                <Header
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
                <div className='flex flex-grow overflow-hidden relative'>
                    <SideBar
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                    <main className='flex-grow p-4 bg-gray-100 overflow-auto'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
