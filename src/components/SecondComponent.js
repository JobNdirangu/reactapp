// Lets do the second component

const SecondComponent=()=>{
    // We set some variables
    let message = "I love programming in react";
    let age =25;


    return(
        <div className="App">
            <h1>Welcome to my Second Component</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non et dolor ab iure modi impedit dolorem corrupti totam vel cum reiciendis nulla nisi placeat atque quasi sunt veniam ex.</p>
            {/* Bind data in js */}
            <p>{message} at {age} years old</p> 


        </div>

    );
}
export default SecondComponent;