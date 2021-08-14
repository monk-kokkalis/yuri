import Style from './Home.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Provider, {Context} from './Sidebar/Provider';
// components
import UnitDetail from 'components/UnitDetail/UnitDetail';
// data
import {units, UnitItem} from 'data/units';
function Home() {
    return (
        <Provider>
            <div className={Style.Home}>
                <Sidebar />
                <div className={Style.content}>
                    <Header context={Context} />
                    <div className={Style.container}>
                        {units.map((el: UnitItem, index: number) => <UnitDetail unit={el} key={index} index={index} />)}
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Home;