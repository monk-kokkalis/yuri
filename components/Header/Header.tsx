import {useContext} from 'react';
import Style from './Header.module.scss';
import {
    IconButton
} from '@material-ui/core';
import {
    BookmarkBorder as BookmarkBorderIcon,
    Search as SearchIcon,
    MailOutline as MailOutlineIcon,
    Menu as MenuIcon,
    NotificationsNone as NotificationsNoneIcon
} from '@material-ui/icons';

interface Props {
    context: React.Context<any>;
}
function Header(props: Props) {
    const context = useContext(props.context);
    
    return (
        <header className={Style.Header}>
            <IconButton onClick={() => context.setToggled(!context.toggled)}>
                <MenuIcon />
            </IconButton>
            <div className={Style.input__group}>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
            <div className={Style.icons__section}>
                <IconButton>
                    <BookmarkBorderIcon />
                </IconButton>
                <IconButton>
                    <MailOutlineIcon />
                </IconButton>
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
            </div>
        </header>
    )
}

export default Header;