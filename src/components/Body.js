
const Body = (props) => {
    
    return(
        <div className='body'>
            <div className='body-left'>
                <h4>Professional Traits</h4>
                <ul>
                    {props.resumeDetails.professionalTraits.map(function (element,index){
                        return( <li key={index}>{element}</li>)})}
                </ul>
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
                <ul>
                    {element.responsiblities.map((responsibility,index)=>{return <li key={index}>{responsibility}</li>})
                    }</ul></>})}

            </div>
        </div>
    )
}

export default Body;