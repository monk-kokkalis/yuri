import {useContext} from 'react';
import Style from './Sidebar.module.scss';
import {
    FilterList as FilterListIcon,
} from '@material-ui/icons';
// components
import Categories from './Categories/Categories';
import {Context} from './Provider';
function Sidebar() {
    const context = useContext(Context);
    return (
        <div className={Style.Sidebar}>
            <div className={Style.title}>
                <FilterListIcon />
                <span>Filter result</span>
            </div>
            <button onClick={
                () => {
                    context.setToggled(!context.toggled);
                }
            }>click</button>
            <div className={Style.overflow__container} style={{height: 'calc(100vh - 45px)'}}>
                <Categories />
            </div>
        </div>
    )
}
export default Sidebar;