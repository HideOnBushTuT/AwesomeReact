import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const peoples = [
    { id: 0, name: 'caibi', friends: [1, 2, 3] },
    { id: 1, name: 'xiaog', friends: [0, 2,] },
    { id: 2, name: 'xoaop', friends: [0, 1, 3] },
    { id: 3, name: 'xiaoc', friends: [1, 2] },
];

const findPeople = (id) => {
    return peoples.find((people) => people.id === id);
};

const People = ({ match }) => {
    let pp = findPeople(match.params.id);
    console.log('person s :', pp);

    return (
        <div>
            <p1>{pp}'s friends</p1>
            <ul>
                {
                    pp.friends.map((friend) => {
                        let p = findPeople(friend);
                        return (
                            <li key={p.id}>
                                <Link to={`${match.url}/${p.id}`}>{p.name}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <Route path={`${match.url}/:id`} component={People} />
        </div>
    );
}

const RecursiveExample = () => {
    return (
        <Router>
            <People match={{ params: { id: 0 }, url: "" }} />
        </Router>
    );
};

export default RecursiveExample;