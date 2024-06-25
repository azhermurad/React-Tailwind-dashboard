import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from '../Header';
import  SideBar from '../SideBar/SideBar';
import Footer from '../Footer';
const MainLayout = ({ children }) => {
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
                   <div className='flex-grow overflow-auto'>
                   <main className='flex-grow p-4 bg-gray-100 overflow-auto'>
                        {children}
                    </main>
                    <Footer/>
                   </div>
                </div>
              
            </div>
        </Router>
    );
};
export default MainLayout;
