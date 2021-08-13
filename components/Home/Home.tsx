import Style from './Home.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Provider, {Context} from './Sidebar/Provider';
// components
import UnitDetail from 'components/UnitDetail/UnitDetail';
function Home() {
    return (
        <Provider>
            <div className={Style.Home}>
                <Sidebar />
                <div className={Style.content}>
                    <Header context={Context} />
                    <div className={Style.container}>
                        {/* <UnitDetail /> */}
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Home;