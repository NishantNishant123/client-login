const initialState = [];

 const LoginReducer = (state = initialState, action) => {  switch (action.type) {
      case "GETID":{ alert(JSON.stringify(action.ids));
         return [...state ,Number(action.ids)]
      }
      case "DELETEDID":{
          state.pop();
          return state;
      }
     default: return state;
  }
 }

 export default LoginReducer;