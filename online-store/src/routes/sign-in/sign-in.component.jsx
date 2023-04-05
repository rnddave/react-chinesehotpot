import { Outlet } from 'react-router-dom';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
} from '../../utils/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

        return (
            <div>

                <h1>I am the Sign-In page (HoLdEr PaGe) </h1>
                <button onClick={logGoogleUser}>Sign in with Google</button>
                <SignUpForm />
            </div>
        )
    };
    <Outlet />

export default SignIn;