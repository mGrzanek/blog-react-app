export const convertText = function(text){
    if(text === undefined) return NaN;
    if(typeof text !== 'string') return 'Error';
    let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    return newText;
}