import comics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import locator from '../assets/img/buy-comics-shop-locator.png';
import power from '../assets/img/buy-dc-power-visa.svg';
import final from '../assets/img/footer-bg.jpg';


export default function Main() {
    return (
        <>
            <div className=" p-4 " style={{ backgroundColor: 'black', minHeight: '120px', color: 'white', fontSize: '20px' }}>
                <span style={{ marginTop: '20px', marginLeft: '60px' }}>--Content goes here--</span>

            </div >
            <div className="d-flex justify-content-center " style={{ backgroundColor: 'blue', minHeight: '150px', color: 'white' }}>
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

            <div className="container-fluid" style={{ backgroundImage: `url(${final})`, minHeight: '400px', color: 'white' }}>
                <div className="container-fluid" style={{ backgroundImage: `url(${final})`, minHeight: '400px', color: 'white' }}>

                    <div className="row pt-4 g-1 ps-5">
                        <div className="col-lg-2">
                            <h5>DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li style={{ color: 'grey' }}>Characters</li>
                                <li style={{ color: 'grey' }}>Comics</li>
                                <li style={{ color: 'grey' }}>Movies</li>
                                <li style={{ color: 'grey' }}>TV</li>
                                <li style={{ color: 'grey' }}>Games</li>
                                <li style={{ color: 'grey' }}>Videos</li>
                                <li style={{ color: 'grey' }}>News</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5>DC</h5>
                            <ul className="list-unstyled">
                                <li style={{ color: 'grey' }}>Terms of Use</li>
                                <li style={{ color: 'grey' }}>Privacy policy(new)</li>
                                <li style={{ color: 'grey' }}>Ad choices</li>
                                <li style={{ color: 'grey' }}>Advertising</li>
                                <li style={{ color: 'grey' }}>Jobs</li>
                                <li style={{ color: 'grey' }}>Subscriptions</li>
                                <li style={{ color: 'grey' }}>Talent Workshops</li>
                                <li style={{ color: 'grey' }}>CPSC certificates</li>
                                <li style={{ color: 'grey' }}>Ratings</li>
                                <li style={{ color: 'grey' }}>shop Help</li>
                                <li style={{ color: 'grey' }}>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5>DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li style={{ color: 'grey' }}>Characters</li>
                                <li style={{ color: 'grey' }}>Comics</li>
                                <li style={{ color: 'grey' }}>Movies</li>
                                <li style={{ color: 'grey' }}>TV</li>
                                <li style={{ color: 'grey' }}>Games</li>
                                <li style={{ color: 'grey' }}>Videos</li>
                                <li style={{ color: 'grey' }}>News</li>
                            </ul>
                        </div>
                    </div>


                    <div className="row mt-2 ps-5">
                        <div className="col-lg-2">
                            <h5>DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li style={{ color: 'grey' }}>Characters</li>
                                <li style={{ color: 'grey' }}>Comics</li>
                                <li style={{ color: 'grey' }}>Movies</li>
                                <li style={{ color: 'grey' }}>TV</li>
                                <li style={{ color: 'grey' }}>Games</li>
                                <li style={{ color: 'grey' }}>Videos</li>
                                <li style={{ color: 'grey' }}>News</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}