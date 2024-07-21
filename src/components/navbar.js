import './App.css'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 align-item-center">
        <a class="navbar-brand" href="/"><h1>BETA</h1></a>
        <button class="navbar-toggler align" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/"><h5>Home </h5><span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/events"><h5>
                    Events</h5></a>
            </li>
            <li class="nav-item dropdown">
                <h5><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Biosphere
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/biosphere24">Biosphere'24</a>
                <a class="dropdown-item" href="/biosphere23">Biosphere'23</a>
                </div>
                </h5>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about"><h5>
                    Team</h5></a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="/gallery"><h5>Gallery</h5></a>
            </li> */}
            </ul>
            
        </div>
        </nav>

    </div>
  );
}

export default Navbar;







