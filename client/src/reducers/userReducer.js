export default function(state = null, action){
    switch(action.type){
        case "FETCH_USER":
            //If user is logged out, action.payload will show an empty string. An empty string will return false in javascript.
            return action.payload || false;
        default:
            return state;
    }
}


// export default function reducer(state={
//     fetching: false,
//     fetched: false,
//     users: {
//         id:null,
//         name: null,
//         age: null,
//     },
//     error: null,
// }, action){
//     switch (action.type){
//         case "FETCH_USER_PENDING":{
//             return{
//                 ...state, 
//                 fetching: true
//             }

//         }
//         case "FETCH_USER_FULFILLED":{
//             return{
//                 ...state, 
//                 fetching: false, 
//                 fetched: true, 
//                 users: action.payload
//             }

//         }
//         case "FETCH_USER_REJECTED":{
//             return{
//                 ...state, 
//                 fetching: false, 
//                 error: action.payload
//             }

//         }
//         case "SET_USER_NAME": {
//             return {
//               ...state,
//               users: {...state.user, name: action.payload},
//             }
//           }
//         default:{
//             return state
//         }
//     }

//     }