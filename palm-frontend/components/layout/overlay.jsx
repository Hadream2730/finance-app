import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageOverlay = (props) => {
    const { loading, setLoading } = props;
    const router = useRouter();


    return (
        <div className={`page-overlay fixed inset-0 z-[100] bg-[#ffffff] transition-all bg-opacity-80 ${loading ? "" : "hidden"}`}>
            <div className='w-full h-full dark:bg-[#ffffff] flex items-center justify-center'>
                <div className="loading bg-[#000000]">
                </div>
            </div>
            {/* <Typography variant="h2" className="text-3xl font-bold text-[#000] dark:text-white transition capitalize absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</Typography> */}
        </div>
    );
};

export default PageOverlay;