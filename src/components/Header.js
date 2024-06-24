import Icon from './ui/Icon';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <header className='bg-white text-black p-3 flex justify-between items-center border-b-[1px] border-black'>
            <h1 className='text-2xl'>Logo</h1>
            <div className='flex items-center space-x-4'>
                <Icon name={'Search'} />
                <Icon name={'User'} />
                <button
                    className='md:hidden text-white focus:outline-none'
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? (
                        <h1 className='text-black'>X</h1>
                    ) : (
                        <h1 className='text-black'>O</h1>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
