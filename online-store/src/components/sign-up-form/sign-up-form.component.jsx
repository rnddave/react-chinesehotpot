import { useState } from "react";

const defaultSignUpForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultSignUpForm);
    const { displayName, email, password, confirmPassword } = formFields;

    const itChanged = event => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your Email and Password</h1>
            <form>
                <label>Display Name</label>
                <input type='text' required onChange={itChanged} name='displayName' value={displayName} />

                <label>Email Adress</label>
                <input type='email' required onChange={itChanged} name='email' value={email} />

                <label>Password</label>
                <input type='password' required onChange={itChanged} name='password' value={password} />
                
                <label>Confirm Password</label>
                <input type='password' required onChange={itChanged} name='confirmPassword' value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;