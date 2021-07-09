const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post!", likesCount: 25 },
        { id: 3, message: "bla bla bla", likesCount: 3 },
    ],

    newPostText: "Hello! World!",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {
                    id: 5,
                    message: body,
                    likesCount: 3,
                }],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        default:
            return state;

    }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;


