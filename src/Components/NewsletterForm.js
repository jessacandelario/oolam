import { useState } from 'react';
import '../App.css';

function SignUpForm() {
    const [submit, setSubmit] = useState("");

    function handleChange(event) {
        setSubmit(event.target.value);
    }

    //when submit button is clicked
    function handleSubmit(event) {
        event.preventDefault();
        alert('Hello, ' + submit + ' Thank you for signing up to our newsletter!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign up for newsletter</h3>
            <input required
                type="text"
                name="name"
                value={submit}
                className='formInput'
                onChange={handleChange}
                placeholder="Name"></input>
            <br></br>
            <input required
                type="email"
                name="email"
                className='formInput'
                placeholder="Email Address"></input>
            <br></br>
            <input className='formSubmit'
                type="submit"
                value="Sign Up"></input>
        </form>
    )
}

export default SignUpForm