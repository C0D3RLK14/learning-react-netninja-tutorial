const Home = () => {
    const handleClick = () => console.log('hello, ninjas');
    
    const handleClickMeAgain = (name, e) => {
        console.log('hello,', name);
        console.log(e);
    }

    return (  
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickMeAgain('LK')}>Click me again</button>
        </div>
    );
}
 
export default Home;