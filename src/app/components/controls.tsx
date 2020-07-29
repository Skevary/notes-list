import React, {FC} from "react";
import {ActiveItem, List} from "../shared/models";


type Props = {
    lists: List[];
    activeItem: ActiveItem;

    moveToUp: (item: ActiveItem) => any;
    moveToDown: (item: ActiveItem) => any;
    addSublist: (item: ActiveItem) => any;
    removeSublist: (item: ActiveItem) => any;
    remove: (item: ActiveItem) => any;
}

const Controls: FC<Props> =  ({
         lists, activeItem,
         moveToUp, moveToDown, addSublist, removeSublist, remove
    }) => {

    const listIndex = !!activeItem.itemId ? lists.findIndex(v => v.id === activeItem.listId) : -1;
    const itemIndex = !!activeItem.itemId ? lists[listIndex].items.findIndex(v => v.id === activeItem.itemId) : -1;
    const hasSelectedItem = () => !!(activeItem.itemId && listIndex !== -1);


    return (
        <div id='controls'>

            <button
                disabled={!hasSelectedItem() || itemIndex <= 0}
                title='Move to Up'
                onClick={() => moveToUp(activeItem)}
            >˄</button>

            <button
                disabled={!hasSelectedItem() || itemIndex >= lists[listIndex].items.length - 1}
                title='Move to Down'
                onClick={() => moveToDown(activeItem)}
            >˅</button>

            <button
                disabled={!hasSelectedItem() || !!lists[listIndex].items[itemIndex].sublistId}
                title='Add sublist'
                onClick={() => addSublist(activeItem)}
            >+ list</button>

            <button
                disabled={!hasSelectedItem() || !lists[listIndex].items[itemIndex].sublistId}
                title='Remove sublist'
                onClick={() => removeSublist(activeItem)}
            >x list</button>

            <button
                disabled={!hasSelectedItem()}
                title='Remove item'
                onClick={() => remove(activeItem)}
            >x</button>
        </div>
    )
};

export default Controls;
