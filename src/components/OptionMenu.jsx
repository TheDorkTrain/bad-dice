import React, { useState, useEffect } from 'react';
import Modal from './Modal'


function Options({secondary, setSecondary, music}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [audioLevel, setAudioLevel] = useState(100);

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    const handleAudioChange = (e) => {
        const newLevel = parseInt(e.target.value);
        setAudioLevel(newLevel);
        // Here you would also update your actual audio levels
        // For example: yourAudioElement.volume = newLevel / 100;
        music.volume = newLevel / 100;
    };


    const stateChange = function(e) {
        setSecondary(e.target.textContent.toLowerCase())
      }

      const General = ({ isFullscreen, toggleFullscreen, audioLevel, handleAudioChange }) => (
        <div style={{display: 'flex' }}>
          <label style={{height: '30%', width: '100%', fontSize: "3rem", display:'flex', gap: '10px', alignItems: "center",  justifyContent: 'center'}}>
            <input 
              style={{height: '50px', width:'50px', textAlign: "center"}}  
              type="checkbox" 
              checked={isFullscreen} 
              onChange={toggleFullscreen}
            /> 
            Fullscreen 
          </label>
          <label style={{height: '30%', width: '100%', fontSize: "3rem", display:'flex', gap: '10px', alignItems: "center",  justifyContent: 'center'}}>
            <input
              type="range"
              min="0"
              max="100"
              value={audioLevel}
              onChange={handleAudioChange}
            />  
            Music Level: {audioLevel}%
          </label>
        </div>
      );

      const optionTab = function(secondary) {
        switch (secondary) {
          case 'general':
            return <General 
            isFullscreen={isFullscreen} 
            toggleFullscreen={toggleFullscreen} 
            audioLevel={audioLevel} 
            handleAudioChange={handleAudioChange}
          />
          case 'credits':
            return (<div>
              <div style={{display: 'flex', justifyContent: 'center' }}>
                <div> <h1>Sammi Sashuttle <a  style={{color: 'yellow'}} target='_blank' href="https://github.com/Sashuttle ">GitHub</a> </h1>
                <h1>theDorkTrain <a  style={{color: 'yellow'}} target='_blank' href="https://github.com/thedorktrain ">GitHub</a> </h1>

                <p>Fireside Tales by Darren Curtis | https://www.darrencurtismusic.com/ </p>
<p>Music promoted on https://www.chosic.com/free-music/all/</p><p>
Creative Commons Attribution 3.0 Unported (CC BY 3.0)
https://creativecommons.org/licenses/by/3.0/
 </p>
               
               </div>

              </div>
            </div>)
          default:
            return <General 
            isFullscreen={isFullscreen} 
            toggleFullscreen={toggleFullscreen} 
            audioLevel={audioLevel} 
            handleAudioChange={handleAudioChange}
          />
        }
      }



  return (
    <> 
      <button onClick={() => setIsModalOpen(true)} className="options" >⚙️</button>


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h1 style={{ color: 'white', marginTop: 0, }}>Options</h1>
          <nav style={{ display: 'flex', gap: "1rem", justifyContent: 'center'}}>
    <button style={{ fontSize: "2rem"}} onClick={stateChange}>General</button>
    <button  style={{ fontSize: "2rem"}}onClick={stateChange}>Credits</button>
    </nav>
    <div >
       {optionTab(secondary)}
    </div>




    <div style={{display: 'flex', justifyContent: 'center', width:'100%'}}> </div>
        
          </Modal>

    </>
  )
}

export default Options


