import { useState } from "react";

const Home = () => {
    //let welcome = "";
    const [welcome, setWelcome] = useState("");

    const handleClick = (e) => {
        setWelcome("Hello, Cyber Cat!");
    }

    /* const handleClickAgain = (name) => {
        console.log("Hello, " + name + "!");
        <button onClick={() => handleClickAgain("Cyber Cat")}>Click This One Too!</button>
    } */

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <p>{ welcome }</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default Home;