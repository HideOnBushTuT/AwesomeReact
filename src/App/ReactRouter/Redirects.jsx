import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 2000);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 2000);
    }
};

const AuthButton = withRouter(
    ({ history }) => (
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push('/'));
                    }}
                >
                    Sign out !
                </button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            )
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            )
            }
        />
    );
}

const Public = () => {
    return <h2>Public</h2>
};

const Protected = () => {
    return <h2>Protected</h2>
};

class Login extends React.Component {
    state = { redirectToRefer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToRefer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: '/' } };
        let { redirectToRefer } = this.state;

        if (redirectToRefer) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

const AuthExample = () => {
    return (
        <Route>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Route>
    );
}

export default AuthExample;