const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, Cyber Cats!", e);
    }

    const handleClickAgain = (name) => {
        console.log("Hello, " + name + "!");
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={() => {
                handleClickAgain("Cyber Cat");
            }}>Click This One Too!</button>
        </div>
    );
}

export default Home;