import Style from './Home.module.scss';
import Sidebar from './Sidebar/Sidebar';
function Home() {
    return (
        <div className={Style.Home}>
            <Sidebar />
        </div>
    )
}

export default Home;