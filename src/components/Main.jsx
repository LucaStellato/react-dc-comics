import comics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import locator from '../assets/img/buy-comics-shop-locator.png';
import power from '../assets/img/buy-dc-power-visa.svg';
import final from '../asstes/img/footer-bg.jpg';


export default function Main() {
    return (
        <>
            <div className=" p-4 " style={{ backgroundColor: 'black', minHeight: '120px', color: 'white', fontSize: '20px' }}>
                <span style={{ marginTop: '20px', marginLeft: '60px' }}>--Content goes here--</span>

            </div >
            <div className="d-flex justify-content-center " style={{ backgroundColor: 'blue', minHeight: '200px', color: 'white' }}>
                <img src={comics} style={{ height: '60px', marginTop: '50px' }} />
                <span className=' mx-3' style={{ marginTop: '60px', paddingRight: '30px' }}>DIGITAL COMICS</span>
                <img src={merchandise} style={{ height: '60px', marginTop: '50px' }} />
                <span className=' mx-3' style={{ marginTop: '60px', paddingRight: '30px' }}>DC MERCHANDISE</span>
                <img src={subscription} style={{ height: '60px', marginTop: '50px' }} />
                <span className=' mx-3' style={{ marginTop: '60px', paddingRight: '30px' }}>SUBSCRIPTIONS</span>
                <img src={locator} style={{ height: '60px', marginTop: '50px' }} />
                <span className=' mx-3' style={{ marginTop: '60px', paddingRight: '30px', paddingRight: '30px' }}>COMIC SHOP LOCATOR</span>
                <img src={power} style={{ height: '60px', marginTop: '50px' }} />
                <span className=' mx-3' style={{ marginTop: '60px', paddingRight: '30px' }}>CDC POWER VISA</span>
            </div>



        </>
    )
}