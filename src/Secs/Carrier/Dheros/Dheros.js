import React,{ useState } from 'react'
import { Dhero, DheroMain, DheroTop, DherosHeadText, DherosLogo, DherosLogoCont, DherosText, DherosVedio, WherosText } from './DherosStyle'
import Pic1 from './JOBS.png'
import VideoFile from './Ved.mp4'
import 'animate.css';
// import { defaultPlayer as Vedio } from 'react-html5video-player'
// import Vedos from './Ved.mp4'
const Dheros = () => {
    const [isPlaying, setIsPlaying] = useState(false);

      
    const handlePlayButtonClick = () => {
      setIsPlaying(true);
    };
    return (
        <Dhero>
            <DheroMain>

                <DheroTop>

                    <DherosHeadText>/ AGENCY DENVER

                    </DherosHeadText>
                    <DherosText>
                        Where talented people pursue
                        their passion.
                    </DherosText>

                </DheroTop>

                <DherosVedio>
                <video controls width="100%" height="100%">
                        <source src={VideoFile} type="video/mp4" />
                      
                    </video>
                    {!isPlaying && (
          <button
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              zIndex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            //   transform:TranslateY('150px'),
              

            }}
            onClick={handlePlayButtonClick}
          >
            Play
          </button>
        )}

                </DherosVedio>
                <DherosLogoCont>
                    <DherosLogo className='head-logo'>
                        <img src={Pic1} alt="" />


                    </DherosLogo>
                </DherosLogoCont>


            </DheroMain>



        </Dhero>
    )
}

export default Dheros
