import {useState} from 'react';
import {Search as SearchIcon} from '@material-ui/icons';
// data
import {colleges, CollegeType} from 'data/colleges';
// elements
import Accordion from 'elements/Accordion/Accordion';
import CheckGroup from 'components/CheckGroup/CheckGroup';
function Categories() {
    const originalData = [...colleges];
    const [data, setData] = useState([...colleges]);
    const filterResult = (event: React.ChangeEvent) => {
        const input = event.target as HTMLInputElement;
        const inputValue = input.value.toLowerCase();
        const filteredResult = originalData.filter((el: CollegeType) => {
            const nameMatches = el.name.toLowerCase().includes(inputValue);
            const mappedDegrees = el.degrees.map(el => el.toLowerCase());
            const degreeMatches = mappedDegrees.filter(el => el.includes(inputValue));
            return nameMatches || degreeMatches.length > 0;
        });
        setData(filteredResult);
    }
    return (
        <Accordion
            label="Categories"
            padding="5px 25px"
            content={
                <>
                    {data.map((el: CollegeType, index: number) => (
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
                    <input type="text" placeholder="Search" onChange={filterResult} />
                </div>
            }
        />
    )
}

export default Categories;