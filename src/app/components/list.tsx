import React, {FC, MouseEvent} from "react";
import {ActiveItem, List} from "../shared/models";
import AddItem from "./add-item";

type Props = {
    list: List;
    lists: List[];
    activeItem: ActiveItem;

    addItem: (listId: string, value: string) => any;
    selectActiveItem: (item: ActiveItem) => any;
};

const EnumeratedList: FC<Props> = ({
       list, lists, activeItem, addItem, selectActiveItem
    }) => {

    const newListItemHandler = (value: string) => {
        addItem(list.id, value);
    };

    const selectActiveItemHandler = (e: MouseEvent, itemId: string) => {
        selectActiveItem({listId: list.id, itemId});
        e.stopPropagation();
    };

    const getSublist = (listId: string) => {
        return lists.find(v => v.id === listId);
    };


    return (
        <ul onClick={e => e.stopPropagation()}>
            {list.items.map(item =>
                <li
                    key={item.id}
                    data-checked={item.id === activeItem.itemId}
                    onClick={e => selectActiveItemHandler(e, item.id)}>

                    <span>{item.value}</span>

                    {!!item.sublistId && <EnumeratedList
                        list={getSublist(item.sublistId) as List}
                        lists={lists}
                        activeItem={activeItem}
                        addItem={addItem}
                        selectActiveItem={selectActiveItem}
                    />}
                </li>
            )}

            <AddItem addItem={newListItemHandler}/>
        </ul>
    )
};

export default EnumeratedList;
