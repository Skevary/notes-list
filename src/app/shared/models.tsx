import {uuid} from "./utility";

/* Types */

export type List = {
    id: string;
    items: ListItem[]
}

export type ListItem = {
    id: string;
    value: string;
    sublistId: string | null;
}

export type ActiveItem = {
    listId: string | null;
    itemId: string | null;
}


/* Constants */

export const INITIAL_LIST: List = {
    id: 'root',
    items: [
        {
            id: uuid(),
            value: 'Coffee',
            sublistId: null
        }, {
            id: uuid(),
            value: 'Tea',
            sublistId: 'inner'
        }, {
            id: uuid(),
            value: 'Milk',
            sublistId: null
        }
    ],
};

export const EMBEDDED_LIST: List = {
    id: 'inner',
    items: [
        {
            id: uuid(),
            value: 'Green Tea',
            sublistId: null
        },
        {
            id: uuid(),
            value: 'Black Tea',
            sublistId: null
        }
    ]
};

export const EMPTY_ACTIVE_ITEM = {
    itemId: null,
    listId: null
};
