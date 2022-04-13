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
            title: "Bachelors Of Science Software Development, Minor in Cyber Security",
            duration: {fromDate: "2019", toDate: "2022"},
            description: "GPA - 3.62",
            subHeading: "Honors College Graduate"
        },
        {
            title: "Clovis Community College",
            duration: {fromDate: "2018", toDate: "2019"},
            description: "GPA - 3.4",
            subHeading: "Completed General Education courses for 1 year before transfering to Grand Canyon University"
        },
        {
            title: "Clovis West High School",
            duration: {fromDate: "2014", toDate: "2018"},
            description: "Varsity Tennis Player, Recipiant of the Eagle Charachter Award",
            subHeading: "High School Diploma"
        }
    ];
    const resumeBullets =[
            // {label: "Education", logoSrc: ""},
            {label: "Work History", logoSrc: "work-history.png"},
            {label: "Projects", logoSrc: "projects.png"},
            {label: "Programming Skills", logoSrc: "programming-skills.png"},
            {label: "Education", logoSrc: "work-history.png"},
           
         
    ];

    const programmingSkillsDetails=[
        {skill: "JavaScript", ratingPercentage: 50},
        {skill: "Java", ratingPercentage: 80},
        {skill: "Node JS", ratingPercentage: 45},
        {skill: "Express JS", ratingPercentage: 45},
        {skill: "Angular JS", ratingPercentage: 60},
        {skill: "HTML", ratingPercentage: 90},
        {skill: "CSS", ratingPercentage: 90},
        {skill: "SQL ", ratingPercentage: 85},
        {skill: "MongoDB", ratingPercentage: 80},
        {skill: "React", ratingPercentage: 40},
    ];

    const resumeDetails =[
        <div className='resume-screen-container' key='education'>

            <ResumeHeading
            heading={"Incomming Developer Intern at BitPay"}
            subHeading={"Waiting expected Start Date"}
            fromDate={"2022"}
            toDate={"2022"}

            />


            <ResumeHeading
            heading={"Amva Corporation"}
            subHeading={"Provided direct supports and mental health services to adults with intellectual/developmental disabilities with a dual diagnosis. Supports include: providing environmental and management, structured life skill acquisition, proactive antecedent intervention. Other inquiry duties included: technology skills training, and IT support for 12+ documentation systems. "}
            fromDate={"2019"}
            toDate={"2022"}

            />
               <ResumeHeading
            heading={"BestBuy/GeekSquad"}
            subHeading={"Consultant Agent, Apple Repair Specialist and Responsible for creating service orders, shipping, receiving and communications with manufactures. Repaired hardware and software issues with clients in a high stress environment."}
            fromDate={"03-2021 "}
            toDate={"08-2021"}
            
            />
         
        </div>,
      
      <div className='resume-screen-container' key='work-experience'>

      <ResumeHeading
      heading={"WorkXTimeAndAttendance - Senior Capstone"}
      subHeading={"Technologies Used: MongoDB, AngularJS, SpringBoot"}
      fromDate={"2021"}
      toDate={"2022"}
      
      />
    <a href="url">Demo</a>
      
<ResumeHeading
      heading={"Albums4You - Inventory Management Project "}
      subHeading={"Technologies SpringBoot, MongoDB Thymeleaf"}
      fromDate={"2021"}
      toDate={"2022"}
      
      />
      <a href="url">Demo</a>
      <ResumeHeading
      heading={"Security Onion - Cyber Security Research Project"}
      subHeading={"Technologies Used: Kali Linux"}
      fromDate={"2022"}
      toDate={"Unknown"}
      
      />
         <a href="url">Demo</a>
      <ResumeHeading
      heading={"React Native Research Proejct"}
      subHeading={"-Technolgies Used: FireBase, React"}
      fromDate={"2022"}
      toDate={"Unknown"}
      
      />
           <a href="url">Demo</a>
      {/* <div className='experience-description'>
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
                
        </div> */}
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



