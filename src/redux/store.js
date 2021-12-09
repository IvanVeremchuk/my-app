import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {                       //Object
    _state : {                      //Svoistvo, dannie
        profilePage:{                //can change data that is mutated - component's state. can't change - component's props
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Yo', likesCount: 11},
                {id: 4, message: 'Yo', likesCount: 11},
                {id: 5, message: 'Yo', likesCount: 11},
                {id: 6, message: 'Yo', likesCount: 11},
                ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage:{ 
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: "Andrew" },
                {id: 3, name: "Viktor" },
                {id: 4, name: "Valera" },
                {id: 5, name: "Sveta" },
                {id: 6, name: "Sasha" },
                ],
            massages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
                ],
            newMessageBody: ""
        },
        sidebar: {}
    
    },
    _callSubscriber () {         //method
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {          //function to method(function that belongs to object)
        this._rerenderEntireTree = observer;
    },
    dispatch (action){ // {type:'ADD_POST'}     //d1spatch(Plain Object)

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
       
        this._callSubscriber(this._state);
        
        }
    }


export default store;
window.store = store;
//store - OOP