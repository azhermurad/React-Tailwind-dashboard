import NavItem from './NavItem';
const links = [
    {
        path: '/',
        label: 'Home',
        icon: 'home',
        link: true,
    },
    {
        label: 'Client Management',
        link: false,
    },
    {
        path: '/trends',
        label: 'Trends',
        icon: 'home',
        link: true,
    },
    {
        path: '/live-campaigns',
        label: 'Live Campaigns',
        icon: 'home',
        link: true,
    },
    {
        path: '/reports',
        label: 'Reports',
        icon: 'home',
        link: true,
    },
    {
        label: 'Settings',
        link: false,
    },
    {
        path: '/support',
        label: 'Support',
        icon: 'home',
        link: true,
    },
    {
        path: '/settings',
        label: 'Settings',
        icon: 'home',
        link: true,
    },
];

const SideBarNav = ({ setIsSidebarOpen }) => {
    return (
        <nav className='flex-grow'>
            <ul>
                {links.map((item, index) => (
                    <NavItem
                        key={index}
                        data={item}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default SideBarNav;
