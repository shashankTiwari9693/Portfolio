import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typical from 'react-typical';


function Card() {
    return (
        <>
            <div className="card">

                <div className="heading">

                </div>
                <img className="profile" src="./Image/Sank.jpg" alt="" />
                <h1 class="name">   SHASHANK TIWARI</h1>
                <div class="info">
                    <h3> <Typical
                        steps={[
                        'Hi, I am a web developer.', 
                        1000,
                         'Hi, I am an ui/ux designer.',
                         1000,
                         'Hi, I am a web designer.',
                         1000
                         ]}
                        loop={Infinity}
                        wrapper="b"
                    /></h3>
                </div>
                <a href="https://drive.google.com/file/d/1GDSeF3svgfeBnIEt9UYFZTIo3YPbv0CX/view?usp=sharing" class="button">Resume</a>
                <div class="icon">
                    <ul>
                        <a href="https://www.facebook.com/profile.php?id=100011340825883"> <li className="fb"><FacebookIcon /></li></a>
                        <a href="https://wa.me/qr/XKABZDYLMXIFM1"> <li className="whats"><WhatsAppIcon /></li></a>
                        <a href="https://www.linkedin.com/in/shashank-tiwari-9693-sank/"><li className="linkd"><LinkedInIcon /></li></a>
                        <a href="https://github.com/sanktiwarirobotics"><li className="git"><GitHubIcon /></li></a>
                    </ul>

                </div>

            </div>



        </>
    );
}
export default Card;