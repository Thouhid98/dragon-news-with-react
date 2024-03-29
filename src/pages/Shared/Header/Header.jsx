import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto my-3' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;