import Style from './CheckGroup.module.scss';
import {
    Search as SearchIcon
} from '@material-ui/icons';
import {
    Checkbox,
    FormControlLabel
} from '@material-ui/core';
// elements
import Accordion from 'elements/Accordion/Accordion';
interface Props {
    label: string;
    items?: Array<any>;
}
function CheckGroup({label, items}: Props) {
    return (
        <div className={Style.CheckGroup}>
            <div className={Style.content__items}>
                <Accordion
                    label={label}
                    content={
                        <ul>
                            {items?.map((el: string, index: number) => 
                                <li key={index}>
                                    <FormControlLabel
                                        control={<Checkbox name={el.toLowerCase()} size="small" color="primary" />}
                                        label={
                                            <span style={{fontSize: '13px', color: 'rgba(0, 0, 0, 0.8)'}}>
                                                {el.charAt(0).toUpperCase() + el.slice(1)}
                                            </span>
                                        }
                                    />
                                </li>
                            )}
                        </ul>
                    }
                />             
            </div>
        </div>
    )
}

export default CheckGroup;