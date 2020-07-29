import React, {FC} from "react";
import {ListItem} from "../shared";
import AddItem from "./add-item";

type Props = {
    items: ListItem[];
    selectedItemId: string | null;
    addItem: (val: string) => any;
    changeSelectedItem: (id: string) => any;
};

const List: FC<Props> = props => {
    return (
        <ul>
            {props.items.map(item =>
                <li
                    key={item.id} id={item.id}
                    data-checked={item.id === props.selectedItemId}
                    onClick={() => props.changeSelectedItem(item.id)}>
                    <span>{item.value}</span>
                </li>
            )}

            <AddItem addItem={v => props.addItem(v)}/>
        </ul>
    )
};

export default List;
