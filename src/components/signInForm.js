import React from 'react';

const SignInForm = () => {
    return (
    <form className = "signInForm" method = "post" action="#">
         
            <h3 className = "regHeading">Войти</h3>
            <input type = "email" className = "registerItem" name = "email" placeholder = "e-mail"/><br/>
            <input type = "password" className = "registerItem" name = "password" placeholder = "Пароль"/><br/>
            <button type = "submit" className = "registerButton">Войти</button>
         
    </form>
    )
};

export default SignInForm;