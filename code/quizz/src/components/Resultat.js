function Resultat() {
    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-laptop-code"></i>
            </div>
            <h1>Résultat</h1>
            <p className="mt-5">
                Votre type de développement est :
            </p>
            <div className="alert alert-success">
                top@top.com
            </div>
            <div className="alert alert-success">
                Frontend
            </div>
            <button className="btn btn-primary"><i className="fas fa-arrow-alt-circle-left mr-1"> Retour</i></button>
        </div>
    );
}

export default Resultat;
