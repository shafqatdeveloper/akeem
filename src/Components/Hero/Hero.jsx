import React, { useState, useEffect, useRef } from 'react';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { ReactTyped } from 'react-typed';
import './Hero.css'

const Hero = () => {
    const [isInputSelected, setIsInputSelected] = useState(false);
    const inputRef = useRef(null); // Create a ref for the input div
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    const handleClickOutside = (event) => {
        // If the click was outside the input div, set isInputSelected to false
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsInputSelected(false);
        }
    };

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError(null); // Clear any previous error
                },
                (err) => {
                    setError(`Error: ${err.message}`);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        // Add event listener for clicks on the document
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Remove event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const paragraphs = [
        'Friends coming over?',
        'Pre-order lunch for the office?',
        'Discover and get great food.',
        'Looking for something healthy?'
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        }, 5000); // Change paragraph every 3000 ms
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='w-full h-screen bg-hero-bg-img bg-cover flex items-center md:justify-start justify-center mt-2'>
            <div className='md:pl-32 w-full md:w-3/5 lg:w-2/5 px-8 sm:px-32 md:px-0 font-bold font-sans md:pt-20'>
                <div className='w-4/5 text-5xl h-52 pb-5 flex items-end'>
                    <div className="container">
                        {paragraphs.map((text, i) => (
                            <div key={i} className={`paragraph ${index === i ? 'slide-in' : 'slide-out'}`}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={inputRef} // Attach the ref to the input div
                    onClick={() => setIsInputSelected(true)}
                    className={`w-full ${isInputSelected ? "border border-blue-500 hover:border-blue-500 hover:border-2" : "border-transparent border-2 hover:border-blue-500"}  rounded-md flex items-center py-1.5 px-2 bg-white gap-2 text-gray-400`}
                >
                    <MdLocationOn size={30} />
                    <input placeholder='Enter Delivery Address' type="text" className='outline-none font-medium w-full focus:outline-non py-2' />
                </div>
                <div className='flex items-center gap-4 pt-4 text-sm font-medium'>
                    <button onClick={handleGetLocation} className='flex items-center gap-1'>
                        <FaLocationCrosshairs />
                        <span className='underline underline-offset-1'>
                            Share Location
                        </span>
                    </button>
                    <button className='underline underline-offset-1'>
                        Login for saved addresses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
