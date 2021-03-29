import Bullets from './Bullets'
const Body = (props) => {
    
    return(
        <div className='body'>
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
    )
}

export default Body;