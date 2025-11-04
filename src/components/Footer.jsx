import facebook from '../assets/img/footer-facebook.png';
import periscope from '../assets/img/footer-periscope.png';
import pinterest from '../assets/img/footer-pinterest.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
export default function Footer() {
    return (
        <div className='d-flex align-items-center justify-content-around' style={{ backgroundColor: 'grey', minHeight: '200px', color: 'white' }}>
            <button className="btn btn-outline-primary text-white bg-transparent w-auto " style={{ marginTop: '50px' }}>SIGN-UP NOW!</button>
            <span className='' style={{ color: 'blue' }}>FOLLOW US</span>
        </div>
    )
}