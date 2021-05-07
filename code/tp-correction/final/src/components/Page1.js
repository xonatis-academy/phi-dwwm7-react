import Question from "./Question";

function Page1() {
    return (
        <Question textAfficher="Aimez-vous faire le design d'un site internet ?" suivant="/question-2" champs="noteQuestion1" />
    );
}

export default Page1;