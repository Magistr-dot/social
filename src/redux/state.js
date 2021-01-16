import woman from './woman.jpg';

let state = {
    profilePage : {
        messagePost: [    {url: '1', message: 'hi', like: '4'},
            {url: '2', message: 'pivet', like: '1'},
            {url: '3', message: 'gogogo', like: '2'} ]
    },
    messagePage: {
        messageData: [    {url: '1', message: '1111', own: "no"},
            {url: '2', message: '2222',own: "yes"},
            {url: '3', message: '3333',own: "no"}],
        dialogsData: [    {url: 'dialogs/1', name: 'Sasa122', ava: <img src={woman} alt = "woman"/>},
            {url: 'dialogs/2', name: 'Sasa2', ava: <img src={woman} alt = "woman"/>},
            {url: 'dialogs/3', name: 'Sasa3', ava: <img src={woman} alt = "woman"/>}]
    },
    friendPage: {
        friends: [    {id: '1', name: 'Sveta'},
            {id: '2', name: 'Nika'},
            {id: '3', name: 'Vika'} ]
    }


}

export default state