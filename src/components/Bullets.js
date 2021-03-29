
const Bullets = (props) =>{
    return <ul>
        {props.bulletPoints.map((point,index)=>{return (
        <li key={index}>{point}</li>
        )})
        }
    </ul>
}

export default Bullets;