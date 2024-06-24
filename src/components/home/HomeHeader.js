import Select from '../Select';
import Title from '../Title';

const HomeHeader = () => {
    return (
        <div className='flex flex-row justify-between items-center mb-[16px]'>
            <Title text={'Qualified Leads'} />
            <div>
                <Select />
            </div>
        </div>
    );
};

export default HomeHeader;
