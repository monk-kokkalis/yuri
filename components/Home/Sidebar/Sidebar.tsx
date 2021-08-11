import Style from './Sidebar.module.scss';
import {
    FilterList as FilterListIcon
} from '@material-ui/icons';
// data
import {colleges, CollegeType} from 'data/colleges';
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
                content={
                    <>
                        {colleges.map((el: CollegeType, index: number) => (
                            <CheckGroup
                                key={index}
                                label={el.name}
                                items={el.degrees}
                            />
                        ))}
                    </>
                }
            />
        </div>
    )
}
export default Sidebar;