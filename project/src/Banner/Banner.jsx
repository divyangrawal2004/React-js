import Header from '../Header/header'
const Banner = () => {
    return (
        <>
        <Header/>
            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="public/background-1.jpg" className="d-block w-100" alt="..." style={{ backgroundSize: "cover" }} />
                </div>
                <div className="carousel-item">
                    <img src="public/background-2.jpeg" className="d-block w-100" alt="..." style={{ backgroundSize: "cover" }} />
                </div>
                <div className="carousel-item">
                    <img src="public/background-3.jpg" className="d-block w-100" alt="..." style={{ backgroundSize: "cover" }} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </>
    )
}

export default Banner