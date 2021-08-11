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
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Chemical"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Civil"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Electrical"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Electronics"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Mechanical"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Packaging"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox name="chemical" size="small" color="primary" />}
                                label="Software"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CheckGroup;