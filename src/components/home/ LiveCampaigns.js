import Title from '../Title';
import Table from './CompaignsTable';

export default function LiveCampaigns() {
    return (
        <div className='border-[1px] border-black'>
            <div className='p-4 bg-[white] border-[1px] border-b-black'>
                <Title text={'Live Campaigns'} />
            </div>
            <Table />
        </div>
    );
}
