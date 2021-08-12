import React, {useState} from 'react';

interface Props {
    children: JSX.Element | Array<JSX.Element>
}

function Provider({children}: Props) {
    const [toggled, setToggled] = useState(true);

    const map = {
        toggled: toggled,
        setToggled: setToggled
    }

    return (
        <Context.Provider value={map}>
            {children}
        </Context.Provider>
    )
}

export interface ContextInterface {
    toggled: boolean
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = React.createContext<ContextInterface>(null!);
export default Provider;