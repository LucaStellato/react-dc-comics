export default function Card({ thumb, series }) {
    return (
        <div className='col mt-3' >
            <div className='cardBody textCenter'>
                <img className='card-img-top' src={thumb} alt='' style={{ width: '180px', marginBottom: '10px', height: '180px' }} />
                <div className='card-body'>
                    <h4>{series}</h4>

                </div>

            </div>


        </div>
    )
}


