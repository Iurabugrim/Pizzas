export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type: type, order: order}
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});