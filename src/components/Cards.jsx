import image from '../assets/gorilla.jpeg';

function Cards() {
    return (
        <>
            <div className="card-container">
                <h2 className="card-title">Gorilla</h2>
                <img className="card-image" src={image} alt="Gorilla" />
                <p className="card-description">Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa. They are the largest living primates.</p>
            </div>
        </>
    );
}

export default Cards;