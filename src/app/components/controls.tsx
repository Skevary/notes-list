import React, {FC} from "react";
import {ListItem} from "../shared";


type Props = {
    items: ListItem[];
    selectedItemId: string | null;

    moveToUp: (index: number) => any;
    moveToDown: (index: number) => any;
    addSublist: (index: number) => any;
    removeSublist: (index: number) => any;
    remove: (index: number) => any;
}

const Controls: FC<Props> = props => {
    const idx = props.items.findIndex(v => v.id === props.selectedItemId);

    return (
        <div id='controls'>

            <button
                disabled={!props.selectedItemId || idx <= 0}
                title='Move to Up'
                onClick={() => props.moveToUp(idx)}
            >
                ˄
            </button>

            <button
                disabled={!props.selectedItemId || idx >= props.items.length - 1}
                title='Move to Down'
                onClick={() => props.moveToDown(idx)}
            >
                ˅
            </button>

            <button
                disabled={!props.selectedItemId || !!props.items[idx]?.children.length}
                title='Add sublist'
                onClick={() => props.addSublist(idx)}
            >
                + list
            </button>

            <button
                disabled={!props.selectedItemId || !props.items[idx]?.children.length}
                title='Remove sublist'
                onClick={() => props.removeSublist(idx)}
            >
                x list
            </button>

            <button
                disabled={!props.selectedItemId}
                title='Remove item'
                onClick={() => props.remove(idx)}
            >
                x
            </button>
        </div>
    )
};

export default Controls;
