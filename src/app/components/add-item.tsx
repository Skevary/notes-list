import React, {FC, useEffect, useState, KeyboardEvent} from "react";


type Props = {
    addItem: (val: string) => any;
}

const AddItem: FC<Props> = ({addItem}) => {
    const [input, setInput] = useState('');

    // useEffect(() => {
    //     console.log(input);
    // }, [input]);

    const handleNewItem = () => {
        if (input.length) {
            addItem(input);
            setInput('');
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && input.length) {
            handleNewItem();
        }
    };

    return (
        <li>
            <input
                autoFocus={true}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Write something...'
            />

            <button onClick={handleNewItem}>+</button>
        </li>
    )
};


export default AddItem;
