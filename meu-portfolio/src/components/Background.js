import AboutMe from "./AboutMe"
import Image from "./Image"
import PersonalInfos from "./PersonalInfos"
import PersonalName from "./PersonalName"
import BackgroundImage from "../assets/spaceImage.jpg"

function Background() {
    
    return (
        
        <div className="background">
            <div className="left">
                <AboutMe />
                <PersonalInfos />
            </div>
            <div className="right">
                <Image />
                <PersonalName />
                
            </div>
        </div>
    )
}

export default Background