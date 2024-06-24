import React from 'react';

const Select = () => {
    return (
        <select className='block w-full px-2 py-2 border border-black  focus:outline-none '>
            <option value='volvo'>New</option>
            <option value='saab'>React</option>
            <option value='opel'>Nest</option>
            <option value='audi'>Nodejs</option>
        </select>
    );
};

export default Select;
