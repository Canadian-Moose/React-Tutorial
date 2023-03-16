import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [welcome, setWelcome] = useState("");
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'pksp3', pin: true, id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'pksp3', pin: true, id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'pksp3', pin: false, id: 3}
    ])

    const handleClick = () => {
        setWelcome("Hello, Cyber Cat!");
    }

    /* const handleClickAgain = (name) => {
        console.log("Hello, " + name + "!");
        <button onClick={() => handleClickAgain("Cyber Cat")}>Click This One Too!</button>
    } */

    /*const handlePin = (id) => {
        let pin = false;
        setBlogs(
            blogs.map((blog) => {
                if (blog.id === id){
                    if (blog.pin === true){
                        pin = false;
                        return {...blog, pin: pin};
                    } else {
                        pin = true;
                        return {...blog, pin: pin};
                    }
                } else {
                    return blog;
                }
            })
        )
    }*/

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br/>
            <h3>{welcome}</h3>
            <br/>
            <button onClick={handleClick}>Click Me!</button>
            <br/>
            <br/>
            <BlogList blogs={blogs.filter((blog) => blog.pin === true)} title="Pinned Blogs!"/>
            <BlogList blogs={blogs} title="All Blogs!"/>
            <br/>
        </div>
    );
}

export default Home;