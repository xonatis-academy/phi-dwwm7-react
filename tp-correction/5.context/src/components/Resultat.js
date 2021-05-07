import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function Resultat() {
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = () => {
        history.push('/');
    };
    
    let email = context.email;
    let typeDeveloppement = 'Backend';

    const moyenne = (context.noteQuestion1 + context.noteQuestion2 + context.noteQuestion3) / 3.0;
    if (moyenne > 2.5) {
        typeDeveloppement = 'Frontend';
    }

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
                {email}
            </div>
            <div className="alert alert-success">
                {typeDeveloppement}
            </div>
            <button className="btn btn-primary" onClick={handleClick}><i className="fas fa-arrow-alt-circle-left mr-2"></i>Retour</button>
        </div>
    );
}

export default Resultat;