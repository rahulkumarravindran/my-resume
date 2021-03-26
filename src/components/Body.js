
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
            <div className='body-right'>
                <h4>Summary</h4>
                {props.resumeDetails.summary.map((element,index) => <p style={{paddingbottom: "4px"}} key={index}>{element}</p>)}
            </div>
        </div>
    )
}

export default Body;