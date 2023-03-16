import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //let welcome = "";
    const [welcome, setWelcome] = useState("");

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'pksp3', pin: true, id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'pksp3', pin: true, id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'pksp3', pin: false, id: 3 }
    ]);

    // const [pin, setPin] = useState(false);

    const handleClick = (e) => {
        setWelcome("Hello, Cyber Cat!");
    }

    /* const handleClickAgain = (name) => {
        console.log("Hello, " + name + "!");
        <button onClick={() => handleClickAgain("Cyber Cat")}>Click This One Too!</button>
    } */

    const handlePin = (id) => {

    }

    useEffect(() => {
        return () => {
            console.log('use effect ran');
        };
    }, [blogs]);
    // empty dependency array makes only run on FIRST render
    

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br/>
            <p>{ welcome }</p>
            <br/>
            <button onClick={handleClick}>Click Me!</button>
            <br/>
            <br/>
            <BlogList blogs={blogs.filter(blog => blog.pin === true)} title="Pinned Blogs!" handlePin={handlePin}/>
            <br/>
            <BlogList blogs={blogs} title="All Blogs" handlePin={handlePin}/>
            <br/>
        </div>
    );
}

export default Home;