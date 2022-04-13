import React, {useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'
export default function Resume(props){
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreenHandler !== props.id)
        return;
        // why is the an any ( antimations)
        Animations.animations.fadeInScreen(props.id);
    };

    // current screen is currentscreedfadein
    const fadeInSubscription = ScrollService.currentScreen.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props) =>{
        return (
            <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ): (
                        <div></div>
                    )}
                </div>
                
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description: ""}</span>
                </div>
            </div>
        
        );
       
    };

    const projectDetails =[
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "A personal Portfolio Website to showcase my projects and experience in one place",
            subHeading: "Technologies Used: React JS, BootStrap"
        },
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "A personal Portfolio Website to showcase my projects and experience in one place",
            subHeading: "Technologies Used: React JS, BootStrap"
        },
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "A personal Portfolio Website to showcase my projects and experience in one place",
            subHeading: "Technologies Used: React JS, BootStrap"
        }
    ];
    const resumeBullets =[
            // {label: "Education", logoSrc: ""},
            {label: "Work History", logoSrc: "work-history.png"},
            {label: "Programming Skills", logoSrc: "programming-skills.png"},
            {label: "Projects", logoSrc: "projects.png"},
            {label: "Interests", logoSrc: "interests.png"},
    ];

    const programmingSkillsDetails=[
        {skill: "JavaScript", ratingPercentage: 50},
        {skill: "Java", ratingPercentage: 50},
        {skill: "Node JS", ratingPercentage: 50},
        {skill: "Express JS", ratingPercentage: 50},
        {skill: "Angular JS", ratingPercentage: 50},
        {skill: "HTML", ratingPercentage: 50},
        {skill: "CSS", ratingPercentage: 50},
        {skill: "SQL ", ratingPercentage: 50},
        {skill: "MongoDB", ratingPercentage: 50},
    ];

    const resumeDetails =[
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
            heading={"Grand Canyon University"}
            subHeading={"Bachelors of Science in Software Development, Minor in Cyber Security"}
            fromDate={"2019"}
            toDate={"2022"}

            />
               <ResumeHeading
            heading={"Grand Canyon University"}
            subHeading={"Bachelors of Science in Software Development, Minor in Cyber Security"}
            fromDate={"2019"}
            toDate={"2022"}
            
            />
               <ResumeHeading
            heading={"Grand Canyon University"}
            subHeading={"Bachelors of Science in Software Development, Minor in Cyber Security"}
            fromDate={"2019"}
            toDate={"2022"}
            
            />
        </div>,
      
      <div className='resume-screen-container' key='work-experience'>

      <ResumeHeading
      heading={"Grand Canyon UniTechnologyersity"}
      subHeading={"BitPay Intern"}
      fromDate={"2019"}
      toDate={"2022"}
      
      />
      <div className='experience-description'>
          <span className='resume-description-text'>
              Currently working in MERN web Stack and a dev sjob
          </span>
      </div>
      <div className='experience-description'>
            <span className='resume-description-text'>
            alksjdfalksdjflkajsdflajdfaldkjfa;sdlfkja;lsdkfjadls;fjka;lsdjfa;ls
            </span>
            <br/>
            <span className='resume-description-text'>
            alksjdfalksdjflkajsdflajdfaldkjfa;sdlfkja;lsdkfjadls;fjka;lsdjfa;ls
            </span>
            <br/>
            <span className='resume-description-text'>
                - asdflajsd;flkajsd;lfkjals;dkfj
                </span>
                
        </div>
        </div>,

        
        
      <div className ='resume-screen-container programming-skills-container'
     key="programming-skills">
         
         {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

        <div className='resume-screen-container' key="projects">
            {projectDetails.map((projectDetails, index)=>(
                <ResumeHeading
                key={index}
                heading={projectDetails.title}
                subHeading={projectDetails.subHeading}
                description={projectDetails.description}
                fromDate={projectDetails.duration.fromDate}
                toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,

    
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`./${bullet.logoSrc}`)}
          alt="oops,, no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };


  return (
    <div
    className="resume-container screen-container fade-out"
    id={props.id || ""}
  >
    <div className="resume-content">
      <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>
        </div>

        <div className="resume-bullet-details">{getResumeScreens()}</div>
      </div>
    </div>
  </div>
);
};



