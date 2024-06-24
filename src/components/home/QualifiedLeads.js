import LeadModel from '../../models/leadModel';
import LeadsCard from './cards/LeadsCard';
const LEADS_DATA = [
    new LeadModel('Ready', "'Good to go.", 'Purchase'),
    new LeadModel(
        'No commitment',
        'Looking at other brands, services, or experiences.',
        'Purchase'
    ),
    new LeadModel(
        'Not ready yet',
        'Needs convincing or has concerns, services, or experiences.',
        'Purchase'
    ),
];
const QualifiedLeads = () => (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        {LEADS_DATA.map((item, index) => (
            <LeadsCard key={index} {...item} />
        ))}
    </div>
);

export default QualifiedLeads;
