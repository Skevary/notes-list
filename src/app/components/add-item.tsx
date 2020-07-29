import React, {FC, KeyboardEvent, useState} from "react";


type Props = {
    addItem: (val: string) => any;
}

const AddItem: FC<Props> =  ({addItem}) => {

    const [input, setInput] = useState('');

    const newItemHandler = () => {
        if (input.length) {
            addItem(input);
            setInput('');
        }
    };

    const keyDownHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && input.length) {
            newItemHandler();
        }
    };


    return (
        <li className='add-item'>
            <input
                type='text'
                autoFocus={true}
                value={input}
                placeholder='Write something...'
                onChange={e => setInput(e.target.value)}
                onKeyDown={keyDownHandler}
            />

            <button
                title={'Add new item'}
                onClick={newItemHandler}>
                +
            </button>
        </li>
    )
};


export default AddItem;
