import Bullets from './Bullets'
import githubImage from './static/github.png'
import stackoverflowImage from './static/stackoverflow.png'
import linkedinImage from './static/linkedin.png'

const Body = (props) => {
    
    return(
        <>
        <div className='body-top'>
            <div className='body-left'>
                <h4>Professional Traits</h4>
                <Bullets bulletPoints={props.resumeDetails.professionalTraits}/>
                <br></br>
                <h4 style={{boxsizing: "content-box",margintop: "20px"}}>Achievements</h4>
                <Bullets bulletPoints={props.resumeDetails.achievements}/>
                <br></br>
                <h4>Technical Skills</h4>
                <Bullets bulletPoints={props.resumeDetails.technicalSkills}/>
                <br></br>
                <h4>Languages Known</h4> 
                <Bullets bulletPoints={props.resumeDetails.languages} />
            </div>
            <div class="middleLine"></div>
            <div className='body-right'>
                <h4>Summary</h4>
                {props.resumeDetails.summary.map((element,index) => <p style={{paddingbottom: "4px"}} key={index}>{element}</p>)}
                <br></br>
                <h4>Work Experience</h4>
                {props.resumeDetails.workExperience.map((element,index)=> {return <>
                <h5>{element.role}</h5>
                <h5>{element.timePeriod}</h5>
                <Bullets bulletPoints={element.responsiblities}/></>})}
                    <br></br>
                <h4>Education</h4>
                {props.resumeDetails.education.map((educationDetail,index) => {return <>
                <h5>{educationDetail.institution}</h5>
                <p>{educationDetail.field}</p>
                </>})}               

            </div>
        </div>
        <br></br>
        <div className='body-bottom'> 
            <h4>Social Media Links</h4>
            <a href={props.resumeDetails.links.github}><h5><img src={githubImage} alt='Github:'></img>{props.resumeDetails.links.github}</h5></a> 
            <a href={props.resumeDetails.links.stackoverflow}><h5><img src={stackoverflowImage} alt='StackOverFlow'></img>{props.resumeDetails.links.stackoverflow}</h5></a> 
            <a href={props.resumeDetails.links.linkedin}><h5><img src={linkedinImage} alt='LinkedIn'></img>{props.resumeDetails.links.linkedin}</h5></a>
        </div>
        </>
    )
}

export default Body;