
function UserGreeting({loggedin=false,name="Guest"}) {
    const welcome = <h2>welcome {name}</h2>;
    const login = <h2>please login</h2>;

    return (loggedin ? welcome : login);
}

export default UserGreeting;