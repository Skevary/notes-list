import {uuid} from "./utility";

export type List = {
    id: string;
    children: ListItem[]
    parentId: string | null;
}

export type ListItem = {
    id: string;
    value: string;
    children: ListItem[]
}

export const INITIAL_LIST_ITEMS: ListItem[] = [
    {
        id: uuid(),
        children: [],
        value: 'Coffee'
    }, {
        id: uuid(),
        children: [
            {
                id: uuid(),
                children: [],
                value: 'Green Tea'
            },
            {
                id: uuid(),
                children: [],
                value: 'Black Tea'
            }
        ],
        value: 'Tea'
    }, {
        id: uuid(),
        children: [],
        value: 'Milk'
    },
];

export const INITIAL_LIST: List = {
    id: uuid(),
    children: INITIAL_LIST_ITEMS,
    parentId: null // root
};
