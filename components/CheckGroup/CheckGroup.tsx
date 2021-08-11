import {useState} from 'react';
import Style from './CheckGroup.module.scss';
import {
    ExpandMore as ExpandMoreIcon,
    Search as SearchIcon
} from '@material-ui/icons';
import {
    Checkbox,
    FormControlLabel,
    IconButton
} from '@material-ui/core';
// data
import {engineeringDegrees} from 'data/engineering';
// elements
import Accordion from 'elements/Accordion/Accordion';
interface Props {
    label: string;
}
function CheckGroup(props: Props) {
    const [expanded, setExpanded] = useState(true);
    return (
        <div className={Style.CheckGroup}>
            <div className={Style.search__box}>
                <SearchIcon fontSize="small" />
                <input type="text" placeholder="Search" />
            </div>
            <div className={Style.content__items}>
                <div className={Style.content__items__item}>
                    <label>Engineering</label>
                    <ul>
                        {engineeringDegrees.map((el: string, index: number) => (
                            <li key={index}>
                                <FormControlLabel
                                    control={<Checkbox name={el.toLowerCase()} size="small" color="primary" />}
                                    label={el.charAt(0).toUpperCase() + el.slice(1)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CheckGroup;