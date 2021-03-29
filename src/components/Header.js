import profile_photo from  './static/profile-photo.png'
import address from './static/address.png'
import email from './static/email.png'
import phone from './static/phone.png'

const Header = (props) => {
    return(
        <div className='header'>
            <div className='photo'>
                <img src={profile_photo} alt='profile_photo'></img>
            </div>
            <div  className='headerDetails'>
                <h1>{props.resumeDetails.name}</h1>
                <h3>{props.resumeDetails.designation}</h3>
                <br></br>
                <div className='headerDetail'><h5><img src={address} alt=""></img>{props.resumeDetails.address}</h5></div>
                <div className='headerDetail'><h5><img src={email} alt=''></img>{props.resumeDetails.emailAddress}</h5></div>
                <div className='headerDetail'><h5><img src={phone} alt=""></img>{props.resumeDetails.phone}</h5></div>
            </div>
        </div>
        
    )
}

export default Header;