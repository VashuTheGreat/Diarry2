import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Welcome to our diary app! We are a team of passionate developers dedicated to providing you with a seamless and intuitive diary experience.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    Our mission is to help you express your thoughts, emotions, and experiences in a safe and private space. Whether you want to journal your daily activities, reflect on your day, or simply record your thoughts, our app is here to support you.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    We believe that everyone deserves a place to express themselves, and we are committed to providing you with a user-friendly and secure platform to do so.
                </p>
                <p className="text-lg text-gray-700">
                </p>
            </div>
            <Footer />
        </>
    )
}