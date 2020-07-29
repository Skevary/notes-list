export const uuid = () =>
    Math.random().toString(36).substring(2, 5) +
    Math.random().toString(36).substring(2, 5);

export const moveArrItem = (arr: any[], fromIndex: number, toIndex: number) =>  {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return [...arr];
};

export const removeByIndex = (arr: any[], index: number) => arr.filter((_, i) => i !== index);
