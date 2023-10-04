import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name, photo);

        createUser(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
        <Navbar></Navbar>
        <div className='w-1/2 mx-auto my-10 font-poppins border rounded-xl p-8 shadow-xl shadow-gray-500'>
            <h2 className='text-center text-3xl mb-10'>Register your account</h2>
            <form onSubmit={handleRegister}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-sm">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-sm">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-sm">Email Address</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-sm">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button  className="btn btn-primary">Login</button>
                </div>
                <p className='my-3 text-center'> Have An Account? <Link className='text-orange-500 font-md' to='/login'>Login</Link></p>
            </form>
        </div>

    </div>
    );
};

export default Register;