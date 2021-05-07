import './App.css';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Resultat from './components/Resultat';
import Page3 from './components/Page3';
import Page2 from './components/Page2';
import Page1 from './components/Page1';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
    return (
        <HashRouter>
            <main>
                <Switch>
                    <Redirect from="/" to="/commencez" exact />
                    <Route path="/resultat" component={Resultat} exact />
                    <Route path="/question-3" component={Page3} exact />
                    <Route path="/question-2" component={Page2} exact />
                    <Route path="/question-1" component={Page1} exact />
                    <Route path="/commencez" component={Home} exact />
                    <Route component={NotFound} exact />
                </Switch>
            </main>
        </HashRouter>
    );
}

export default App;
