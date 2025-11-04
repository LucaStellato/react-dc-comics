import logo from '../assets/img/dc-logo.png';
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-between align-items-center p-3">
                    <img src={logo} alt="Navbar Logo" className="navbar-brand mx-3 px-4" style={{ height: '100px' }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">CHARACTERS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">COMICS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">MOVIES</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">GAMES</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">COLLECTIBLES</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">VIDEOS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">FANS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">NEWS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">SHOP</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
