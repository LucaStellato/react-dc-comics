import comics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import locator from '../assets/img/buy-comics-shop-locator.png';
import power from '../assets/img/buy-dc-power-visa.svg';


export default function Main() {
    return (
        <>
            <div className=" p-4" style={{ backgroundColor: 'black', minHeight: '120px', color: 'white', fontSize: '20px' }}>
                <span style={{ marginTop: '20px', marginLeft: '60px' }}>--Content goes here--</span>

            </div >
            <div className="d-flex justify-content-center" style={{ backgroundColor: 'blue', minHeight: '200px', color: 'white' }}>
                <img src={comics} style={{ height: '60px' }} />
                <span className='mt-3 mx-3'>DIGITAL COMICS</span>
                <img src={merchandise} style={{ height: '60px' }} />
                <span className='mt-3 mx-3'>DC MERCHANDISE</span>
                <img src={subscription} style={{ height: '60px' }} />
                <span className='mt-3 mx-3'>SUBSCRIPTIONS</span>
                <img src={locator} style={{ height: '60px' }} />
                <span className='mt-3 mx-3'>COMIC SHOP LOCATOR</span>
                <img src={power} style={{ height: '60px' }} />
                <span className='mt-3 mx-3'>CDC POWER VISA</span>
            </div>

        </>
    )
}