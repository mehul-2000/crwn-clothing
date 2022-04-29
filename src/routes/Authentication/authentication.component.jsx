

import SignUpForm from '../../components/SignUp/signupform.component'
import SignInForm from '../../components/SignIn/signinform.component'

import './authentication.styles.scss'
function Authentication() {



    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication