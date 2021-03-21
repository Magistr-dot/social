import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (



            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={'login'} component={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={'password'} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={"input"} type={"checkbox"} name={'remember'}/>remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>

    )
}

const LoginReduxForm = reduxForm({

    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (fromData) => {
        console.log(fromData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit ={onSubmit}/>
    </div>
}
export default Login