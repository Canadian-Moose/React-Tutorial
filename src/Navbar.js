const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The PKSP3 Blog</h1>
            <div className="links">
                <a href="/">Home</a>&emsp;
                <a href="/create" style={{
                    color: "black",
                    backgroundColor: "#a335f1",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;