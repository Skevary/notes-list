import React, {FC, MouseEvent} from "react";
import {ListItem, uuid} from "../shared";
import AddItem from "./add-item";

type Props = {
    items: ListItem[];
    selectedItemId: string | null;
    addItem: (val: string) => any;
    changeSelectedItem: (id: string) => any;
};

const List: FC<Props> = props => {

    const handleChangeSelectedItem = (e: MouseEvent, id: string) => {
        props.changeSelectedItem(id);
        e.stopPropagation();
    };

    const handleAddNewItem = (value: string) => {
        props.items.push({
            id: uuid(), value, children: []
        });
    };

    return (
        <ul>
            {props.items.map(item =>
                <li
                    key={item.id} id={item.id}
                    data-checked={item.id === props.selectedItemId}
                    onClick={e => handleChangeSelectedItem(e, item.id)}>
                    <span>{item.value}</span>
                    {!!item.children.length && <List
                        items={item.children}
                        selectedItemId={props.selectedItemId}
                        addItem={props.addItem}
                        changeSelectedItem={props.changeSelectedItem}
                    />}
                </li>
            )}

            <AddItem addItem={handleAddNewItem}/>
        </ul>
    )
};

export default List;
