function Home() {
    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-balance-scale-left"></i>
            </div>
            <h1>Quel type de développeur(se) êtes-vous ?</h1>
            <div className="form-group my-5">
                <label>Entrez votre email :</label>
                <input type="email" className="form-control text-center" />
            </div>
            <button className="btn btn-success">Répondre au quizz <i className="fas fa-question-circle ml-1"></i></button>
        </div>
    );
}

export default Home;