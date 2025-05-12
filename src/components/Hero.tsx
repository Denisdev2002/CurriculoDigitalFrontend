import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';

type HeroProps = {
  name: string;
  apresentation: string;
};

const Hero = ({ name, apresentation }: HeroProps) => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const totalTime = apresentation.length * 45 + 1000;
    const timer = setTimeout(() => setTypingDone(true), totalTime)
    return () => clearTimeout(timer);
  }, [apresentation]);

  return(
    <section className="relative bg-black text-lime-400 flex flex-col items-center py-20 px-6 text-center overflow-hidden">
       <h2 className="text-4xl font-bold font-mono mb-4">
          {name}
        </h2>
      
       <p className="mt-4 text-lg max-w-2xl font-mono text-lime-300 leading-relaxed">
        <Typewriter
            words={[apresentation]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={1000}
          />
        </p>

        <AnimatePresence>
          {typingDone && (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-8"
          >
          <Image
            src="/profile.png"
            alt="Foto de Perfil"
            width={160}
            height={160}
            className="rounded-full mb-4 shadow-xl border-4 border-lime-500 animate-pulse"
          />

          </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {typingDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-[-1] pointer-events-none bg-[radial-gradient(circle,#84cc16_1px,transparent_1px)] [background-size:20px_20px]"
          />
        )}
        </AnimatePresence>
      </section>
  );
};

export default Hero;