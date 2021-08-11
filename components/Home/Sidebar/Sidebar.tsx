import Style from './Sidebar.module.scss';
import {
    FilterList as FilterListIcon,
} from '@material-ui/icons';
// components
import Categories from './Categories/Categories';

function Sidebar() {
    return (
        <div className={Style.Sidebar}>
            <div className={Style.title}>
                <FilterListIcon />
                <span>Filter result</span>
            </div>
            <div className={Style.overflow__container} style={{height: 'calc(100vh - 45px)'}}>
                <Categories />
            </div>
        </div>
    )
}
export default Sidebar;