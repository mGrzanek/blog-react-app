import { nanoid } from "nanoid";

// selectors
export const getAllCategories = ({categories}) => categories;

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_CATEGORY = createActionName("ADD_CATEGORY");

// action creators
export const addCategory = payload => ({ type: ADD_CATEGORY, payload });
const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [...statePart, { id: nanoid(), ...action.payload }];
        default:
            return statePart;
    };
};

export default categoriesReducer;