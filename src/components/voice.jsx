import React, { useState, useEffect } from 'react';

const VoiceActor = ({ emotion, emotionKey }) => {

  
    const happySounds = [
      new URL('../assets/audio//voice/Happy 1.mp3', import.meta.url).href,
      new URL('../assets/audio//voice/Happy 2.mp3', import.meta.url).href,
      new URL('../assets/audio//voice/Happy 3.mp3', import.meta.url).href,
      new URL('../assets/audio//voice/Happy 4.mp3', import.meta.url).href,
      new URL('../assets/audio//voice/Happy 5.mp3', import.meta.url).href
    ];

    const sadSounds = [
        new URL('../assets/audio//voice/Sad 1.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Sad 2.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Sad 3.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Sad 4.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Sad 5.mp3', import.meta.url).href
    ];
    const angrySounds = [
        new URL('../assets/audio//voice/Angry 1.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Angry 2.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Angry 3.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Angry 5.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Angry 7.mp3', import.meta.url).href
    ]
    const sexySounds = [
         new URL('../assets/audio//voice/Sexy 1.mp3', import.meta.url).href,
        new URL('../assets/audio//voice/Sexy 2.mp3', import.meta.url).href,
         new URL('../assets/audio//voice/Sexy 3.mp3', import.meta.url).href,
         new URL('../assets/audio//voice/Sexy 4.mp3', import.meta.url).href,
         new URL('../assets/audio//voice/Sexy 5.mp3', import.meta.url).href
    ]
  
    useEffect(() => {
        const playSound = () => {
          let sounds;
          switch(emotion) {
            case 'happy':
              sounds = happySounds;
              break;
            case 'sad':
              sounds = sadSounds;
              break;
            case 'angry':
              sounds = angrySounds;
              break;
            case 'blush':
              sounds = sexySounds;
              break;
            default:
              sounds = happySounds;
          }
          
          const randomIndex = Math.floor(Math.random() * sounds.length);
          const selectedSound = sounds[randomIndex];
          
          const audio = new Audio(selectedSound);
          audio.play();
        };
    
        playSound();
      }, [emotion, emotionKey]);
    
      return null;
    };
    
    export default VoiceActor;