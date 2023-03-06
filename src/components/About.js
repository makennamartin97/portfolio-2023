import React from 'react';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';


const About = () => {
    return(
        <div className="about"id="about" >
          <Spin>
            <div className="title">
                <h2>About Me</h2>
            </div>
            </Spin>
            <div className="aboutme">
                <Fade top>
                    <div className='p1'>
                        <p>I am currently located in the <span>Washington D.C. Metropolitan Area</span> but I grew up in San Diego, California and Spokane, Washington. My interest in web development began around 2013 when I was just a 15 year old trying to customize my Tumblr blog theme. Once I saw the pages were made with HTML, I was fascinated and instantly started my research to see how it works and one thing led to another. With 4+ years professional and freelance experience under my belt I am confident in my abilities, although I’ll always have the inclination to keep learning and growing in this ever-changing field. </p>
                    </div>
                </Fade>
                <Fade top>
                    <div className='p2'>
                        <p>I have a diverse portfolio built with countless front and back end technologies as well as <span>blockchain integration</span>. I have demonstrated ability to translate designs and wireframes into high quality code via <span>Javascript and React workflows</span>. Proficient at maintaining front end performance and optimizing web pages for <span>maximum speed and scalability</span>, I always go the extra mile to deliver the best possible code. I am passionate about building beautiful user interfaces, bringing innovative ideas to life, and developing new skills as the technology industry advances. </p>
                    </div>
                </Fade>
            
                
            </div>
            <div id="skills"></div>
            


        </div>

    )

}
export default About