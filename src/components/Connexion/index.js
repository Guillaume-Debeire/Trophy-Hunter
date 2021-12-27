import React from 'react';

import './style.scss';

const Connexion = () => (
    <div className='connexion'>
        <div className='connexion-box'>
            <form className='connexion-box-form'>
                <div className='connexion-box-form-field'>
                    <label for='username'className='connexion-box-form-field-label'>Username</label>
                    <input type='text' name="username"className='connexion-box-form-field-input' placeholder='xX-Dark-Sasuke-Xx'></input>
                </div>
                <div className='connexion-box-form-field'>
                    <label for='password' className='connexion-box-form-field-label'>Password</label>
                    <input type='text' name="password" className='connexion-box-form-field-input' placeholder='BossKiller420'></input>
                </div>
                <button type='submit' className='connexion-box-form-submit'>Go</button>
            </form>
        </div>

    </div>
)

export default Connexion;