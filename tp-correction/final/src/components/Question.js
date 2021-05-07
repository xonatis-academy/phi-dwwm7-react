import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function Question(props) {
    const history = useHistory();
    const context = useContext(ContextGlobal);
    const handleClick = (note) => () => {
        context[props.champs] = note;
        history.push(props.suivant);
    };
    /*     
    const handleClick = function(note) {
        return function() {
            context[props.champs] = note;
            history.push(props.suivant);
        }
    }
    */

    // On peut construire une liste d'éléments JSX avec une boucle for
    // pour éviter de les copier-coller à la main
    // La liste est "buttons" et va contenir 5 éléments button
    const buttons = [];
    for (let i = 0; i < 5; ++i) {
        buttons.push(<button className="btn btn-light mx-1" onClick={handleClick(i + 1)}>{i + 1}</button>)
    }

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-question-circle"></i>
            </div>
            <p>
            {props.textAfficher}
            </p>
            <div className="mt-5">
                {buttons}
            </div>
        </div>
    );
}

export default Question;