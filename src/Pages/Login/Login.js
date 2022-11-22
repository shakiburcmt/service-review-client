import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, providerLogIn,loading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (loading) {
                    return <button className="btn loading">loading</button>
                }
            })
            .catch(err => console.error(err))
    }

    const handlePopUp = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (loading) {
                    return <button className="btn loading">loading</button>
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                <form onSubmit={handleSignIn} className="card-body">
                    <h1 className='text-5xl text-center font-bold'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p className="label-text-alt link link-hover">Forgot password?</p>
                            <Link to='/signup' className="label-text-alt link link-hover">New? Please register</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline normal-case mb-2">Login</button>
                    </div>
                </form>
                <button onClick={handlePopUp} className="btn btn-outline normal-case">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;