function Question() {
    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-question-circle"></i>
            </div>
            <p>
                Voici une question ?
            </p>
            <div className="mt-5">
                <button className="btn btn-light mx-1">1</button>
                <button className="btn btn-light mx-1">2</button>
                <button className="btn btn-light mx-1">3</button>
                <button className="btn btn-light mx-1">4</button>
                <button className="btn btn-light mx-1">5</button>
            </div>
        </div>
    );
}

export default Question;