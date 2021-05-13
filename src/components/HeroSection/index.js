import React, {useState} from 'react';
import { Button } from '../ButtonElements'
import Video from '../../videos/video.m4v';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroBtnWrapper, 
    HeroContent, 
    HeroH1, 
    HeroP,
    ArrowForward, 
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Welcome to my resume!
                </HeroH1>
                <HeroP>
                    Get to know me and have a look at my past and future projects!
                </HeroP>
                <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
