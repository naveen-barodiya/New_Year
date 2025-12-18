import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const slides = [


    {
        id: 1,
        gif: "https://media.tenor.com/4XuyEUtrRCoAAAAm/kiss-cute.webp",
        quote: "🌟 New year, new beginnings, new hopes 🌟",
    },
    {
        id: 2,
        gif: "https://media.tenor.com/jkVthFR60pgAAAAm/feliz-cumplea%C3%B1os.webp",
        quote: "💖 May this year fill your life with love & smiles 💖",
    },
    {
        id: 3,
        gif: "https://media.tenor.com/pUWdbaBKeiYAAAAm/cute-bear-silvia-emoji.webp",
        quote: "✨ Leave the past behind, embrace the future ✨",
    },
    {
        id: 4,
        gif: "https://media.tenor.com/sOVYL1RsYyYAAAAm/munch-face.webp",
        quote: "🎉 Cheers to health, happiness & success 🎉",
    },
    {
        id: 5,
        gif: "https://media.tenor.com/_1xqhO5RzVYAAAAm/i-miss-you-bear-milk-and-mocha.webp",
        quote: "🥂 Make this New Year truly unforgettable 🥂",
    },
];

export default function NewYearPopupSlider() {
    const [index, setIndex] = useState(0);
    const [visibleWords, setVisibleWords] = useState(0);

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    // Reset typing on slide change
    useEffect(() => {
        setVisibleWords(0);
        const words = slides[index].quote.split(" ");

        const typing = setInterval(() => {
            setVisibleWords((prev) =>
                prev < words.length ? prev + 1 : prev
            );
        }, 300);

        return () => clearInterval(typing);
    }, [index]);

    const words = slides[index].quote.split(" ");

    return (
        <div className="popup-wrapper">
            {/* 🎉 Header */}
            <motion.h1
                className="header-text"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                💖✨  Happy New Year 2026    ✨💖
            </motion.h1>

            {/* 🌸 LEFT DECOR */}
            <motion.div
                className="side left-side"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                🧸✨
                <br />
                🎉
            </motion.div>

            {/* 🌸 RIGHT DECOR */}
            <motion.div
                className="side right-side"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                ✨💖
                <br />
                🎊
            </motion.div>


            {/* 🎁 Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[index].id}
                    className="popup-card gradient-border"
                    initial={{ y: 60, opacity: 0, scale: 0.96 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -60, opacity: 0, scale: 0.96 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <img
                        src={slides[index].gif}
                        alt="teddy gif"
                        className="teddy-gif"
                    />

                    {/* ✍️ Typing Quote */}
                    <p className="quote">
                        {words.slice(0, visibleWords).join(" ")}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* 💝 Footer */}
            <p className="footer-text">
                  ❤️Wishing you peace, growth & beautiful moments ❤️<br />
                             💕🌟 NAVEEN KUMAR BADODIYA🌟💕

            </p>
        </div>
    );
}



