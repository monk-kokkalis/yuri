import {useContext, useRef} from 'react';
import Style from './Sidebar.module.scss';
import {
    IconButton
} from '@material-ui/core';
import {
    DoubleArrow as DoubleArrowIcon,
    FilterList as FilterListIcon,
} from '@material-ui/icons';
// components
import Categories from './Categories/Categories';
import {Context} from './Provider';
// css transition
import {CSSTransition} from 'react-transition-group';
function Sidebar() {
    const context = useContext(Context);
    const transitionRef = useRef(null!);
    const transitionClasses = {
        enter: Style.sidebarEnter,
        enterActive: Style.sidebarEnterActive,
        enterDone: Style.sidebarEnterDone,
        exit: Style.sidebarExit,
        exitActive: Style.sidebarExitActive,
        exitDone: Style.sidebarExitDone
    }
    const hideButton = () => {
        context.setToggled(!context.toggled);
    }
    return (
        <CSSTransition in={context.toggled} timeout={300} classNames={transitionClasses} nodeRef={transitionRef} >
            <div className={Style.Sidebar} ref={transitionRef}>
                <div className={Style.title}>
                    <label>
                        <FilterListIcon />
                        <span>Filter result</span>
                    </label>
                    <IconButton size="small" style={{transform: 'scaleX(-1)'}} onClick={hideButton}>
                        <DoubleArrowIcon />
                    </IconButton>
                </div>
                <div className={Style.overflow__container}>
                    <Categories />
                </div>
            </div>
        </CSSTransition>
    )
}
export default Sidebar;