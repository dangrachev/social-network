import profileReducer, {deletePost} from "./profile-reducer";

let initState = {
    postsData: [
        {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 42}
    ]
}

it('should delete specified post', () => {

    let action = deletePost(0);
    let newState = profileReducer(initState, action);

    expect(newState.postsData.length).toBe(0);
});