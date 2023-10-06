import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import Leftnav from '../Shared/Leftnav/Leftnav';
import Rightnav from '../Shared/Rightnav/Rightnav';
import Breakingnews from './Breakingnews';
import { useLoaderData } from 'react-router-dom';
import Newscard from './Newscard';

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <Leftnav></Leftnav>
                </div>
                <div className='lg:col-span-2 '>
                    {
                        news.map(singleNews =><Newscard key={singleNews._id} news={singleNews}></Newscard>)
                    }
                </div>
                <div>
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default Home;