import Title from '../Title';
import CampaignTable from './CompaignsTable';

export default function LiveCampaigns() {
    return (
        <div className='border-[1px] border-black border-b-0 mb-12'>
            <div className='p-4 bg-[white] border-[1px] border-b-black'>
                <Title text={'Live Campaigns'} />
            </div>
            <CampaignTable />
        </div>
    );
}
