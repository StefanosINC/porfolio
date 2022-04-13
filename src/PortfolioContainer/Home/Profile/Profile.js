import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile(){
    return (
        <div className='profile-container'>
            <div className ='profile-parent'>
                <div className='profile-details'>
                    <div className ='colz'>
                        <div className='colz-icon'>
                        <a href='https://github.com/StefanosINC'>
                            <i className='fa fa-github-square' style={{fontSize:100}}>
                                <h5>Github Portfolio</h5> 
                            </i>
                        </a>
                        <a href='https://www.linkedin.com/in/stefanos-sophocleous-736733194/'>
                            <i className='fa fa-linkedin' style={{fontSize:100}}>

                            <h5>LinkedIn Profile</h5> 
                            </i>
    
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">Stefanos Christaki Sophocleous</span>
                            
                        </span>
                    </div>
                   
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Full Stack Dev 💻",
                                1000,
                                "Cyber Student 💻",
                                1000,
                                "Cloud Computing 🌐",
                                1000,
                           
                            ]}
                            />
                            
                           
                            </h1>

                            <span className='profile-role-tagline'>
                                Goal Driven technoligist with a passion for Software Development and Cyber Security!
                            </span>
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href='SoftwareResume.pdf' download='Stefanos SoftwareResume.pdf'>

                        
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                        
                        
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}