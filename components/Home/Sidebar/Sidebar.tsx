import Style from './Sidebar.module.scss';
import {
    ExpandMore as ExpandMoreIcon,
    FilterList as FilterListIcon
} from '@material-ui/icons';
// elements
import Accordion from 'elements/Accordion/Accordion';
import CheckGroup from 'components/CheckGroup/CheckGroup';

function Sidebar() {
    return (
        <div className={Style.Sidebar}>
            <div className={Style.title}>
                <FilterListIcon />
                <span>Filter result</span>
            </div>
            <Accordion
                label="Categories"
                padding="5px 25px"
                content={<CheckGroup label="Categories" />}
            />
            {/*  */}
        </div>
    )
}
export default Sidebar;