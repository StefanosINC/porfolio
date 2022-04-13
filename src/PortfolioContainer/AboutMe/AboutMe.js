import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import { render } from '@testing-library/react';
import './AboutMe.css';
export default function AboutMe(props){

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreenHandler !== props.id)
        return
        // why is the an any ( antimations)
        Animations.animations.fadeInScreen(props.id)
    };

    // current screen is currentscreedfadein
    const fadeInSubscription = ScrollService.currentScreen.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANT = {
        description: "I am looking forward to using my knowledge of software development, cyber security, and networking to grow with a company to produce results as I graduate from Grand Canyon University. I am mission-oriented individual who is currently involved with the GCU Honors College, Information Technology Club, Cyber Security Club at Grand Canyon  University",
        highlights: {
            bullets:[
                "I was born and raised in Fresno California",
                
            ],
            heading: "Here are a few Highlights:"
        }
    }
    const RenderHighlight = () => {
        return SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };
    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>
                            {SCREEN_CONSTANT.description}
                            </span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANT.highlights.heading}</span>
                            </div>
                            {/* <RenderHighlight /> */}
                            {RenderHighlight()}

                        </div>
                        <div className='about-me-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href='SoftwareResume.pdf' download='Stefanos SoftwareResume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                        </div>
                </div>

            </div>
            
        </div>
        </div>
    )
}