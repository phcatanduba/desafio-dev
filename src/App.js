import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
