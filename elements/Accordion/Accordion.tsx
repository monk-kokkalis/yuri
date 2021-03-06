import {useEffect, useRef, useState} from 'react';
import Style from './Accordion.module.scss';
import {
    KeyboardArrowRight as KeyboardArrowRightIcon
} from '@material-ui/icons';
import {
    IconButton
} from '@material-ui/core';
interface Props {
    content: JSX.Element;
    label: string;
    padding?: string;
    searchElement?: JSX.Element;
}
function Accordion({content, label, padding, searchElement}: Props) {
    const contentRef = useRef<HTMLDivElement>(null!);
    const [contentMaxHeight, setContentMaxHeight] = useState('auto');
    const [expanded, setExpanded] = useState(true);

    useEffect(function initMaxHeight() {
        setContentMaxHeight(contentRef.current.scrollHeight + 'px');
    }, []);

    return (
        <div className={Style.Accordion} style={{padding: padding}}>
            <div className={Style.label}>
                <span>{label}</span>
                <IconButton
                    size="small"
                    onClick={() => setExpanded(!expanded)}
                    style={{
                        transition: 'transform 500ms ease-in-out',
                        transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}    
                >
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>
            <div className={Style.content} style={{maxHeight: expanded ? contentMaxHeight : '0px'}} ref={contentRef}>
                {searchElement}
                {content}
            </div>
        </div>
    )
}

export default Accordion;