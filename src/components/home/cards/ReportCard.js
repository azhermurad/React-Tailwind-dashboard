import React from 'react';
import Icon from '../../ui/Icon';
import Button from '../../ui/Button';

export default function ReportCard({
    title,
    subTitle,
    description,
    buttonText,
}) {
    return (
        <div className='bg-white  border-[1px] border-black p-4'>
            <div className='flex flex-row gap-4 mb-4 pb-4'>
                <div className='w-[72px] h-[72px] bg-[#EEEEEE]  justify-center flex items-center'>
                    <Icon name='dot2' className={'w-4 h-4'} />
                </div>
                <div>
                    <p className='text-base'>{title}</p>
                    <p className='text-3xl'>{subTitle}</p>
                </div>
            </div>
            <p className='text-base mb-4 h-11 my-4 overflow-hidden '>
                {description}
            </p>
            <div className='w-full pt-4'>
                <Button variant='outline'>{buttonText}</Button>
            </div>
        </div>
    );
}
