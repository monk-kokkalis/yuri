import {
    Search as SearchIcon
} from '@material-ui/icons';
// data
import {colleges, CollegeType} from 'data/colleges';
// elements
import Accordion from 'elements/Accordion/Accordion';
import CheckGroup from 'components/CheckGroup/CheckGroup';
function Categories() {
    return (
        <>
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
                searchElement={
                    <div className="search__box">
                        <SearchIcon fontSize="small" />
                        <input type="text" placeholder="Search" />
                    </div>
                }
            />
        </>
    )
}

export default Categories;