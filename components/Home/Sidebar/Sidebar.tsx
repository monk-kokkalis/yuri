import Style from './Sidebar.module.scss';
import {
    ExpandMore as ExpandMoreIcon,
    FilterList as FilterListIcon
} from '@material-ui/icons';
// components
import CheckGroup from 'components/CheckGroup/CheckGroup';

function Sidebar() {
    return (
        <div className={Style.Sidebar}>
            <div className={Style.title}>
                <FilterListIcon />
                <span>Filter result</span>
            </div>
            <CheckGroup
                label="Categories"
                padding="5px 25px"
            />
        </div>
    )
}
export default Sidebar;