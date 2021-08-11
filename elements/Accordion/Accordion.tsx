import {useRef, useState} from 'react';
import Style from './Accordion.module.scss';
import {
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import {
    IconButton
} from '@material-ui/core';
interface Props {
    label: string;
    padding?: string;
    content: JSX.Element;
}
function Accordion({content, label, padding}: Props) {
    const contentRef = useRef<HTMLDivElement>(null!);
    const [expanded, setExpanded] = useState(true);

    return (
        <div className={Style.Accordion} style={{padding: padding}}>
            <div className={Style.label}>
                <span>{label}</span>
                <IconButton size="small" onClick={() => setExpanded(!expanded)}>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            <div className={Style.content} style={{maxHeight: expanded ? '500px' : '0px'}} ref={contentRef}>
                {content}
            </div>
        </div>
    )
}

export default Accordion;