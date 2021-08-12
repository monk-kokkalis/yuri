import Style from './Home.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Provider, {Context} from './Sidebar/Provider';
function Home() {
    return (
        <Provider>
            <div className={Style.Home}>
                <Sidebar />
                <Header context={Context} />
            </div>
        </Provider>
    )
}

export default Home;