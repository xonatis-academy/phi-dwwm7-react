import { useHistory } from 'react-router-dom';

function Resultat() {
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/');
    };

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
                michael@xonatis.com
            </div>
            <div className="alert alert-success">
                Frontend
            </div>
            <button className="btn btn-primary" onClick={handleClick}><i className="fas fa-arrow-alt-circle-left mr-2"></i>Retour</button>
        </div>
    );
}

export default Resultat;