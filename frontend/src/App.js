import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import ImportPage from './components/ImportPage';
import StorePage from './components/StorePage';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/import">
                    <ImportPage />
                </Route>
                <Route path="/store">
                    <StorePage />
                </Route>
            </Switch>
        </Router>
    );
}
