import React, {useState} from "react";

const FormValidator = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = [];
        if(!email || !password || !password) errors.push("all fields must be filled in")
        setErrors(errors.length ? errors.join(', ') : 'User created!');

    }
    return <div>
        <form onSubmit={handleSubmit} id="form-validation">
            <h2>Sign Up!</h2>
            <label htmlFor="email">Email</label>
            <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <label htmlFor="password-confirm">Password Confirm</label>
            <input type='password' name='password-confirm' onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm}/>
            <div>{error}</div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
}

export default  FormValidator;