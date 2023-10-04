import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const Rightnav = () => {
    return (
        <div>
            <div className='p-4  mb-6'>

                <h2 className='text-3xl mb-3'>Login With</h2>
                <button className="btn btn-outline w-full mb-3">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub>Login With</FaGithub>
                    Github
                </button>

                <h2 className='text-3xl my-4'>Find Us On</h2>
                <a href="" className='p-4 flex text-xl border rounded-t-lg justify-center items-center '><FaFacebook className='mr-3'></FaFacebook> <span>Facebook</span></a>
                <a href="" className='p-4 flex text-xl border items-center justify-center '><FaTwitter className='mr-3'></FaTwitter> <span>Twiter</span></a>
                <a href="" className='p-4 flex text-xl border rounded-b-lg justify-center items-center '><FaInstagram className='mr-3'></FaInstagram> <span>Instagram</span></a>
            </div>

            <div  className='p-4  mb-6'>
            <h2 className='text-3xl '>Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Rightnav;