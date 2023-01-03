import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.component";
import './sign-in-form.style.scss'

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) { 
            switch(error.code) {
               case 'auth/wrong-password':
                alert('incorrect password') 
                break
                case 'auth/user-not-found':
                alert('user does not exist')
                break
                default:
                console.log(error)
            } 
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container"> 
            <h2> I already have an account?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit}> 
               <FormInput 
                    label='Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email'
                    value={email}
               />
 
               <FormInput
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange}  
                    name='password'
                    value={password}
               />

               <div className="buttons-container"> 
                    <Button type="submit"> SIGN IN </Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle} > GOOGLE SIGN IN </Button>
               </div>
            </form>
        </div>
    )
};

export default SignInForm