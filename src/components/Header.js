import profile_photo from  './static/profile-photo.png'

const Header = (props) => {
    return(
        <div className='header'>
            <div className='photo'>
                <img src={profile_photo} alt='profile_photo'></img>
            </div>
            <div>
                <h1>{props.resumeDetails.name}</h1>
                <h3>{props.resumeDetails.designation}</h3>
                <br></br>
                <h5>{props.resumeDetails.address}</h5>
                <h5>{props.resumeDetails.emailAddress}</h5>
                <h5>{props.resumeDetails.phone}</h5>
            </div>
        </div>
        
    )
}

export default Header;