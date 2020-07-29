import React, {FC, useEffect, useState} from 'react';
import {INITIAL_LIST_ITEMS, ListItem, moveArrItem, removeByIndex, uuid} from "./shared";
import List from "./components/list";
import Controls from "./components/controls";

import './styles.scss';

const App: FC = () => {
    const [list, changeList] = useState<ListItem[]>(INITIAL_LIST_ITEMS);

    const [selectedItemId, setSelectedItemId] = useState<null | string>(null);

    const addNewItem = (val: string) => {
        changeList([...list, {
            id: uuid(),
            value: val,
            children: []
        }])
    };

    const changeSelectedItem = (id: string) => {
        console.log(id);
        setSelectedItemId(selectedItemId === id ? null : id);
    };

    const moveTo = (index: number, direction: 'up' | 'down') => {
        changeList(moveArrItem(list, index, direction === 'up' ? index - 1 : index  + 1));
    };

    const addSublist = (index: number) => {
        console.log('Add sublist');
    };

    const removeSublist = (index: number) => {
        console.log('Remove sublist');
    };

    const removeItem = (index: number) => {
        setSelectedItemId(null);
        changeList(removeByIndex(list, index));
    };

    return (
        <>
            <h2>The Notes List</h2>

            <Controls
                items={list}
                selectedItemId={selectedItemId}
                moveToUp={v => moveTo(v, 'up')}
                moveToDown={v => moveTo(v, 'down')}
                addSublist={v => addSublist(v)}
                removeSublist={v => removeSublist(v)}
                remove={v => removeItem(v)}
            />

            <List
                items={list}
                selectedItemId={selectedItemId}
                addItem={addNewItem}
                changeSelectedItem={changeSelectedItem}
            />
        </>
    );
};

export default App;

