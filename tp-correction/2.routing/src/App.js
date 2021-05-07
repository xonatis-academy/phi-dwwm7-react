import './App.css';

// On importe nos pages (components)
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Resultat from './components/Resultat';
import NotFound from './components/NotFound';

// On importe les "balises" (components) de "react-router-dom"
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <main>
                <Switch>
                    <Redirect from="/" to="/commencez" exact />
                    <Route path="/commencez" component={Home} exact />
                    <Route path="/question-1" component={Page1} exact />
                    <Route path="/question-2" component={Page2} exact />
                    <Route path="/question-3" component={Page3} exact />
                    <Route path="/resultat" component={Resultat} exact />
                    <Route component={NotFound} exact />
                </Switch>
            </main>
        </HashRouter>
    );
}

export default App;
