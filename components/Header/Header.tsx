import Style from './Header.module.scss';
import {
    BookmarkBorder as BookmarkBorderIcon,
    Search as SearchIcon,
    MailOutline as MailOutlineIcon,
    NotificationsNone as NotificationsNoneIcon
} from '@material-ui/icons';

function Header() {
    return (
        <header className={Style.Header}>
            <div className={Style.input__group}>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
            <div className={Style.icons__section}>
                <BookmarkBorderIcon />
                <MailOutlineIcon />
                <NotificationsNoneIcon />
            </div>
        </header>
    )
}

export default Header;