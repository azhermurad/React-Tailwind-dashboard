import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='bg-[#434345] py-8 px-6 flex flex-row justify-between'>
            <p className='text-base font-normal text-white'>Send us Feedback</p>
            <div className=''>
                <nav className='space-x-4'>
                    <Link
                        to='/'
                        className='text-base text-white hover:underline'
                    >
                        Regulatory Terms
                    </Link>
                    <Link
                        to='/'
                        className='text-base text-white hover:underline'
                    >
                        Non Discrimination
                    </Link>
                    <Link
                        to='/'
                        className='text-base text-white  hover:underline'
                    >
                        Trust Centre
                    </Link>
                    <Link
                        to='/'
                        className='text-base text-white  hover:underline'
                    >
                        Terms of Use
                    </Link>
                    <Link
                        to='/'
                        className='text-base text-white  hover:underline'
                    >
                        Privacy
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Footer;
