import React from 'react';
import Icon from '../../ui/Icon';
import Button from '../../ui/Button';

const LeadsCard = ({ title, buttonText, description }) => {
    return (
        <div className='bg-white border-[1px] border-black '>
            <div className='flex flex-row justify-between  items-center px-4 py-4'>
                <p className='text-black text-base font-medium'>{title}</p>
                <Icon className='w-4 h-4' name={'dot'} />
            </div>
            <div className='px-4 py-4 border-t-[1px] border-black'>
                <p className='text-base mb-4 h-11'>{description}</p>
                <div className='flex justify-center'>
                    <div className='w-11/12'>
                        <Button onClick={() => {}}>{buttonText}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadsCard;
