import profileReducer, {addPost, deletePost} from "./profileReducer";

let initialState = {
    myPostsData: [
        {id: 1, messages: 'Hi, how are u?', likesCount: 2},
        {id: 2, messages: 'Nice acc', likesCount: 12},
        {id: 3, messages: 'Just in time', likesCount: 0},
    ],
    newPostText: 'it-kamasutra',
};

it('New post shoud be added',
    () => {

        let action = addPost('this is new message for unit test')
        let newState = profileReducer(initialState, action);

        expect(newState.myPostsData.length).toBe(4)
    });

it('New post message shoud be correct',
    () => {

        let action = addPost('this is new message for unit test')
        let newState = profileReducer(initialState, action);

        expect(newState.myPostsData[3].messages).toBe('this is new message for unit test')
    });

it('after deleting number of post should be decrement ',
    () => {
        let action = deletePost(1);
        let newState = profileReducer(initialState, action);
        expect(newState.myPostsData.length).toBe(2);
    });
