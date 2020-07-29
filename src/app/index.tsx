import React, {FC, useState} from 'react';
import {List, ActiveItem, EMBEDDED_LIST, EMPTY_ACTIVE_ITEM, INITIAL_LIST} from "./shared/models";
import {moveArrItem, uuid} from "./shared/utility";

import EnumeratedList from "./components/list";
import Controls from "./components/controls";

import './styles.scss';

const App: FC = () => {
    const [lists, changeLists] = useState<List[]>([INITIAL_LIST, EMBEDDED_LIST]); // for empty [{id: uuid(), items: []}]
    const [activeItem, setActiveItem] = useState<ActiveItem>(EMPTY_ACTIVE_ITEM);


    const addNewItem = (listId: string, value: string) => {
        const newLists = [...lists];
        const listIndex = newLists.findIndex(v => v.id === listId);

        newLists[listIndex].items.push({id: uuid(), value, sublistId: null});
        changeLists(newLists);
    };

    const selectActiveItem = (newItem: ActiveItem) => {
        setActiveItem(activeItem.itemId === newItem.itemId ?
            EMPTY_ACTIVE_ITEM : newItem
        );
    };

    const moveTo = (item: ActiveItem, direction: 'up' | 'down') => {
        const newLists = [...lists];
        const listIndex = newLists.findIndex(v => v.id === item.listId);
        const itemIndex = newLists[listIndex].items.findIndex(v => v.id === item.itemId);

        newLists[listIndex].items = moveArrItem(
            newLists[listIndex].items, itemIndex,
            direction === 'up' ? itemIndex - 1 : itemIndex + 1
        );

        changeLists(newLists);
    };

    const addSublist = (item: ActiveItem) => {
        const newLists = [...lists];
        const listIndex = newLists.findIndex(v => v.id === item.listId);
        const itemIndex = newLists[listIndex].items.findIndex(v => v.id === item.itemId);

        const newSublistId = uuid();
        newLists.push({id: newSublistId, items: []});
        newLists[listIndex].items[itemIndex].sublistId = newSublistId;
        changeLists(newLists);
    };

    const removeSublist = (item: ActiveItem) => {
        const newLists = [...lists];
        const listIndex = newLists.findIndex(v => v.id === item.listId);
        const itemIndex = newLists[listIndex].items.findIndex(v => v.id === item.itemId);
        const sublistId = newLists[listIndex].items[itemIndex].sublistId;
        const sublistIndex = newLists.findIndex(v => v.id === sublistId);

        newLists.splice(sublistIndex, 1);
        newLists[listIndex].items[itemIndex].sublistId = null;
        changeLists(newLists);
    };

    const removeItem = (item: ActiveItem) => {
        const newLists = [...lists];
        const listIndex = newLists.findIndex(v => v.id === item.listId);
        const itemIndex = newLists[listIndex].items.findIndex(v => v.id === item.itemId);

        newLists[listIndex].items.splice(itemIndex, 1);
        setActiveItem(EMPTY_ACTIVE_ITEM);
        changeLists(newLists);
    };

    return (
        <>
            <h2>Notes List</h2>

            <Controls
                lists={lists}
                activeItem={activeItem}

                addSublist={addSublist}
                removeSublist={removeSublist}
                moveToUp={v => moveTo(v, 'up')}
                moveToDown={v => moveTo(v, 'down')}
                remove={removeItem}
            />

            <EnumeratedList
                list={lists[0]} // root list
                lists={lists}
                activeItem={activeItem}

                addItem={addNewItem}
                selectActiveItem={selectActiveItem}
            />
        </>
    );
};

export default App;

