import SideBarNav from './SideBarNav';

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <aside
            style={{ minWidth: '252px' }}
            className={`p-[24px] bg-white border border-r border-r-black fixed inset-y-0 left-0 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 bg-white-800 text-black  w-[252px]  z-20`}
        >
            <SideBarNav setIsSidebarOpen={setIsSidebarOpen} />
        </aside>
    );
};

export default SideBar;
