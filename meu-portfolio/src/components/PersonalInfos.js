import React from 'react'
import CheckImage from '../assets/check.png'
import HTMLImage from '../assets/html-5.png'
import CSSImage from '../assets/css-3.png'
import SASSImage from '../assets/sass.png'
import JSImage from '../assets/script-java.png'

function PersonalInfos() {
    return (
        <div className="card">
            <div id="skills">
                <h1>Hard Skills</h1>
                <div id="skillsJuntas">
                    <div id="skillCima">


                        <div className="skillComp">
                            <img className="checkImage" src={CheckImage} />
                            <div className="textSkills">
                                <h2>HMTL</h2>
                                <p>Experienced</p>
                            </div>
                            <img id="htmlImage" className='skillImage' src={HTMLImage} />
                        </div>
                        <div className="skillComp">
                            <img className="checkImage" src={CheckImage} />
                            <div className="textSkills">
                                <h2>JavaScript</h2>
                                <p>Experienced</p>
                            </div>
                            <img id="JSImage" className='skillImage' src={JSImage} />
                        </div>
                    </div>
                    <div id="skillBaixo">
                        <div className="skillComp">
                            <img className="checkImage" src={CheckImage} />
                            <div className="textSkills">
                                <h2>CSS</h2>
                                <p>Experienced</p>
                            </div>
                            <img id="CSSImage" className='skillImage' src={CSSImage} />
                        </div>
                        <div className="skillComp">
                            <img className="checkImage" src={CheckImage} />
                            <div className="textSkills">
                                <h2>SASS</h2>
                                <p>Experienced</p>
                            </div>
                            <img id="SASSImage" className='skillImage' src={SASSImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfos