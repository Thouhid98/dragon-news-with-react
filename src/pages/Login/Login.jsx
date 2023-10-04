
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-1/2 mx-auto my-10 font-poppins border rounded-xl p-8 shadow-xl shadow-gray-500'>
                <h2 className='text-center text-3xl mb-10'>Login your account</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">Login</button>
                    </div>
                    <p className='my-3 text-center'>Don't Have An Account? <Link className='text-orange-500 font-md' to='/register'>Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;