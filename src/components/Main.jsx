import comics from '../assets/img/buy-comics-digital-comics.png';

export default function Main() {
    return (
        <>
            <div className=" p-4" style={{ backgroundColor: 'black', minHeight: '120px', color: 'white', fontSize: '20px' }}>
                <span style={{ marginTop: '20px', marginLeft: '60px' }}>--Content goes here--</span>

            </div >
            <div className="d-flex justify-content-center" style={{ backgroundColor: 'blue', minHeight: '200px', color: 'white' }}>
                <img src={comics} style={{ height: '60px' }} />
                <span className='mt-3 mx-3'>DIGITAL COMICS</span>
                <img src={comics} style={{ height: '40px' }} />
                <img src={comics} style={{ height: '40px' }} />
                <img src={comics} style={{ height: '40px' }} />
            </div>

        </>
    )
}