import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const OldSchoolMenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <div className={match ? "active" : ""}>
                    {match ? "> " : ""}
                    <Link to={to}>{lable}</Link>
                </div>
            )}
        />
    );
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

const About = () => {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

const CustomLinkExample = () => {
    return (
        <Router>
            <div>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" lable={"Home"}/>
                <OldSchoolMenuLink to="/about" lable={"About"}/>
                <hr />
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    );
}

export default CustomLinkExample;