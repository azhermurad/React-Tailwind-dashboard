import React from 'react';
import Icon from '../ui/Icon';
import { NavLink } from 'react-router-dom';

const NavItem = ({ setIsSidebarOpen, data }) => {
    if (!data.link) {
        return <li className='mb-1  p-[8px] flex items-center'>
            <span>
                {data.label}
            </span>
        </li>;
    }
    return (
        <li className='mb-1 p'>
            <NavLink
                to={data.path}
                className={({ isActive }) =>
                    isActive
                        ? 'bg-[#EEEEEE] p-[8px] flex items-center'
                        : 'hover:bg-[#EEEEEE]  p-[8px]  flex items-center'
                }
                onClick={() => setIsSidebarOpen(false)}
            >
                <Icon className='w-[20px] h-[20px]' name={data.icon} />
                <span className='text-base ml-3'> {data.label}</span>
            </NavLink>
        </li>
    );
};

export default NavItem;
