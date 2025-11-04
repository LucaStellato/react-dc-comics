import facebook from '../assets/img/footer-facebook.png';
import periscope from '../assets/img/footer-periscope.png';
import pinterest from '../assets/img/footer-pinterest.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
export default function Footer() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-around' style={{ backgroundColor: '#303030', minHeight: '200px', color: 'white', position: 'relative', zIndex: 1 }}>
                <button className="btn btn-outline-primary text-white bg-transparent w-auto ">SIGN-UP NOW!</button>
                <div>
                    <span className='' style={{ color: 'blue' }}>FOLLOW US</span>
                    <img src={facebook} style={{ width: '30px', marginLeft: '10px' }} />
                    <img src={twitter} style={{ width: '30px', marginLeft: '10px' }} />
                    <img src={youtube} style={{ width: '30px', marginLeft: '10px' }} />
                    <img src={pinterest} style={{ width: '30px', marginLeft: '10px' }} />
                    <img src={periscope} style={{ width: '30px', marginLeft: '10px' }} />
                </div>
            </div>
        </>
    )
}