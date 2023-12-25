import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Home.module.css'
import { Player } from '@lottiefiles/react-lottie-player';

function Poster() {

    function stopScroll() {
        console.log("hi");
    }
    return (
        <div className={` items-center justify-center h-full ${styles.banner}`} onScroll={stopScroll}>
            <div className={`h-[80%] items-center p-5 top-0 sm:top-[10%] flex justify-center ${styles.poster}`}>
                <div className='p-3'>
                    <div className=''>
                        <h1 className={`text-white font-extrabold text-[4vmax]`}>
                            We make
                        </h1>
                        <h1 style={{ color: "#a52a4a" }} className={` font-extrabold text-red text-[4vmax]`}>
                            Digital Ideas &
                        </h1>
                        <h1 className={`text-white font-extrabold text-[4vmax]`}>
                            Seo Marketing
                        </h1>
                    </div>
                    <br />
                    <p className='text-white'>Shaba point is famous agency for making softwares and marketing.Your number one choise agency</p>
                    <br />
                    <button style={{ background: "#a62759" }} className=' text-white rounded-full text-xl sm:text-3xl font-bold p-3 sm:p-5'>
                        Contact us
                    </button>
                </div>
                <br/>
                <div className={`${styles.posterBox} flex h-full`}>
                    <Player
                        src='/poster.json'
                        className="w-[80%]"
                        loop
                        autoplay
                        
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Poster
