import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextGlobal from '../common/ContextGlobal';

function Home() {
    const [email, setEmail] = useState('michael@xonatis.com');
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = () => {
        context.email = email;
        history.push('/question-1');
    };

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-balance-scale-left"></i>
            </div>
            <h1>Quel type de développeur(se) êtes-vous ?</h1>
            <div className="form-group my-5">
                <label>Entrez votre email :</label>
                <input type="email" value={email} className="form-control text-center" onChange={e => setEmail(e.target.value)} />
            </div>
            <button className="btn btn-success" onClick={handleClick}>Répondre au quizz <i className="fas fa-question-circle ml-1"></i></button>
        </div>
    );
}

export default Home;