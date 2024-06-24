import Title from '../Title';
import ReportCard from './cards/ReportCard';
const REPORT_DATA = [
    {
        title: 'Scheduled Meetings',
        subTitle: '72',
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros.',
        buttonText: 'View Calendar',
    },
    {
        title: 'Potential deal values',
        subTitle: '$1,700,000',
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros.',
        buttonText: 'See Details',
    },
    {
        title: 'Conversion Rate',
        subTitle: '94%',
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros.',
        buttonText: 'Explore Details',
    },
];
const TaskAndReports = () => {
    return (
        <>
            <Title text={'Tasks and Reports'} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-4'>
            {REPORT_DATA.map((item, index) => (
            <ReportCard key={index} {...item} />
        ))}
            </div>
        </>
    );
};

export default TaskAndReports;
