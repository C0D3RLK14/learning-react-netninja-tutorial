const Home = () => {
    // Function for handling the click event(can be named as anything doesn't have to be 'handleClick')
    const handleClick = () => console.log('hello, ninjas');

    // Logging the event object('e') to the console
    const handleClickMeAgain = (name, e) => {
        console.log('hello,', name);
        console.log(e);
    }

    return (  
        <div className="home">
            <h1>Homepage</h1>
            {/* Hooking the function to the button click event */}
            <button onClick={handleClick}>Click me</button>
            {/* NOTE: We should not call the function(handleClick()), bcz it will run the function even without the button being clicked. Therefore you just reference(handleClick) it */}

            {/* How to pass in an argument with the funciton */}
            <button onClick={() => handleClickMeAgain('LK')}>Click me again</button>
            {/* Here the function with an argument we need to run with the button clicked is wrapped around another funciton. This just declares a function without calling it. And this type of a function is called an anonymous function */}

            {/* Event object (e) */}
            {/* Attributes like onClick and others related to event handling produces an event object we could access it from the further most function in the event handling attribute. In the below example from the anonymous function. As follows */}
            <button onClick={(e) => {
                handleClickMeAgain('LK', e);
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;