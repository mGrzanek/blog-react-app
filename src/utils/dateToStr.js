export const dateToString = function(dateObj){
    if(dateObj === undefined) return null;
    if(typeof dateObj !== 'object') return undefined;
    const day = dateObj.getDate().toString().padStart(2, 0);
    const month = (dateObj.getMonth() + 1).toString().padStart(2, 0);
    const year = dateObj.getFullYear();

    return `${month}/${day}/${year}`;
};
