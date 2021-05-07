import { useHistory } from 'react-router-dom';

function Question() {
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/resultat');
    };

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-question-circle"></i>
            </div>
            <p>
                Voici une question ?
            </p>
            <div className="mt-5">
                <button className="btn btn-light mx-1" onClick={handleClick}>1</button>
                <button className="btn btn-light mx-1" onClick={handleClick}>2</button>
                <button className="btn btn-light mx-1" onClick={handleClick}>3</button>
                <button className="btn btn-light mx-1" onClick={handleClick}>4</button>
                <button className="btn btn-light mx-1" onClick={handleClick}>5</button>
            </div>
        </div>
    );
}

export default Question;