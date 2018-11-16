export default (state = {}, action) => {
    switch (action.type) {
     case 'SEND_MESSAGE':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }