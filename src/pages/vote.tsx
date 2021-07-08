import { Route, Switch, useRouteMatch } from 'react-router-dom'
import NewProposal from '../components/Vote/NewProposal';
import VoteDetail from '../components/Vote/VoteDetail';
import VoteList from '../components/Vote/VoteList';

const Vote = () => {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <VoteList />
            </Route>
            <Route path={`${path}/detail`}>
                <VoteDetail />
            </Route>
            <Route path={`${path}/new-proposal`}>
                <NewProposal />
            </Route>
        </Switch>
    )
}


export default Vote
