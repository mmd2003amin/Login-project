import React from 'react';
import { Route , Switch , Redirect } from "react-router-dom"
import SignUp from './signUp';
import Login from './Login';
const App = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={SignUp}/>
                </Switch>
            </div>
        </>
    );
};

export default App;