const intialState = {
    number: 0
}
export default (state = intialState ,action) =>{
    switch(action.type ){
        case 'ADD':
        return{
            ...state,
        number : state.number+1,
        status : 'ADD'
        }
        case 'SUB':
        return{
            ...state,
            number:state.number-1,
            status:'SUB'
        }
        default:
        return state
    }
}