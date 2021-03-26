
const Body = (props) => {
    const professionalTraits=props.resumeDetails.professionalTraits;
    return(
        <div className='body'>
            <div className='body-left'>
                <h4>Professional Traits</h4>
                <ul>
                    {professionalTraits.map(function (element,index){
                        return( <li key={index}>{element}</li>)})}
                </ul>
            </div>
            <div className='body-right'>
                <h4>Summary</h4>
                <p style={{paddingbottom: "4px"}}>An Enthusiastic, Creative and Resilient graduate student at the prestigious University of Windsor who has an experience of 2 years in the field of Information Technology as a Project Engineer at Wipro Ltd.</p>
                <p>Looking for an environment that offers a greater challenge and allows me to develop my skills and knowledge that helps realize my true potential.
                </p>
            </div>
        </div>
    )
}

export default Body;