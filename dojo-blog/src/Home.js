// importing useState
import { useState } from 'react';

const Home = () => {

    // This does not change the displayed value of mario to luigi when the button is clicked
    // let name = 'mario';

    // const handleClick = () => {
    //     name = 'luigi';
    //     console.log(name);
    // };

    // Inorder to change the value displayed when the button is clicked we would have to use the useState function.
    const [name, setName] = useState('mario');
    // NOTE: This [name, setName] is known as 'Array destructuring', and according to the above statement we will be creating a const named 'name' with the value in the useState hook 'mario' (therefore, const name = 'mario'). And creating a function 'setName' to change the value of the const 'name' which will be called later in the code.

    const [age, setAge] = useState(25);
    // The 'useState()' hook could used with any datatype.

    const handleClick = () => {
        // Calling the function to change the value of name when click event occurs
        setName('luigi');
        setAge(40);
        console.log(name, age);
    };

    return (  
        <div className="home">
            <h1>Homepage</h1>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;