import Style from './Sidebar.module.scss';
import {
    FilterList as FilterListIcon
} from '@material-ui/icons';
function Sidebar() {
    return (
        <div className={Style.Sidebar}>
            <div className={Style.title}>
                <FilterListIcon />
                <span>Filter result</span>
            </div>
            <div className={Style.heading}>Categories</div>
        </div>
    )
}
export default Sidebar;