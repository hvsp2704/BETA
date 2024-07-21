import './App.css'

function BNavbar(props) {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 align-item-center">
        <a class="navbar-brand" href={`/biosphere${props.name}/`}><h1>{`Biosphere'${props.name}`}</h1></a>
        <button class="navbar-toggler align" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav mr-auto">
            
            <li class="nav-item active">
                <a class="nav-link" href={`/biosphere${props.name}/`}><h5>About</h5><span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href={`/biosphere${props.name}/events`}><h5>
                    Events</h5></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href={`/biosphere${props.name}/schedule`}><h5>
                    Schedule</h5></a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href={`/biosphere${props.name}/gallery`}><h5>Gallery</h5></a>
            </li> */}
            <li class="nav-item active">
                <a class="nav-link" href="/"><h5>BETA</h5><span class="sr-only"></span></a>
            </li>
            </ul>
            
        </div>
        </nav>

    </div>
  );
}

export default BNavbar;







