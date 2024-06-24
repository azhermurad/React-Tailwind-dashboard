import React from 'react';
import CompaignModel from '../../models/compaignModel';

// table Head Name
const TH = ['Name', 'Company', 'Number', 'Personas', 'Date', ''];
// table Head Render Funcation
const TableHead = () => {
    return (
        <thead>
            <tr>
                {TH.map((name, ind) => (
                    <th
                        key={ind}
                        className='py-4 px-5 border-b border-black text-left text-base font-semibold'
                    >
                        {name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

const Table = () => {
    return (
        <div className='overflow-x-auto'>
            <table className='min-w-full bg-white'>
                <TableHead />
                <tbody>
                    {data.map((row, index) => (
                        <React.Fragment key={row.id}>
                            {index % 4 === 0 && (
                                <tr>
                                    <td
                                        colSpan='6'
                                        className='py-4 px-5 border-b border-black text-left text-base font-semibold bg-[#EEEEEE]'
                                    >
                                        Campaign Name
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td className='px-6 py-7 border-b border-black text-base font-semibold '>
                                    {row.name}
                                </td>
                                <td className='px-6 py-7 border-b border-black text-base'>
                                    {row.company}
                                </td>
                                <td className='px-6 py-7 border-b border-black text-base'>
                                    {row.phone}
                                </td>
                                <td className='px-6 py-7 border-b border-black text-base'>
                                    {row.teamName}
                                </td>
                                <td className='px-6 py-7 border-b border-black text-base'>
                                    {row.date}
                                </td>
                                <td className='px-6 py-7 border-b border-black text-base font-semibold'>
                                    {row.view}
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

const data = [
    // Dummy data for demonstration :)
    new CompaignModel(
        1,
        'Full Name',
        'Company Name',
        '(480) 555-0103',
        'Team Name',
        'Nov 24, 2050',
        'View'
    ),
    new CompaignModel(
        2,
        'Full Name',
        'Company Name',
        '(480) 555-0103',
        'Team Name',
        'Nov 24, 2050',
        'View'
    ),
    new CompaignModel(
        3,
        'Full Name',
        'Company Name',
        '(480) 555-0103',
        'Team Name',
        'Nov 24, 2050',
        'View'
    ),
    new CompaignModel(
        4,
        'Full Name',
        'Company Name',
        '(480) 555-0103',
        'Team Name',
        'Nov 24, 2050',
        'View'
    ),
    new CompaignModel(
        5,
        'Full Name',
        'Company Name',
        '(480) 555-0103',
        'Team Name',
        'Nov 24, 2050',
        'View'
    ),
];
