import { useHistory } from 'react-router-dom';

function Question(props) {
    const history = useHistory();
    const handleClick = (note) => () => {
        history.push(props.suivant);
    };

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