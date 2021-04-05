const Reducer1  = {
    BasketWines:[],
    Admin:'',
    variable:false,
    user:'',
    data:'',
    verify:true,
    wines:[]
}


function reduxstate(state = Reducer1, action) {
    switch (action.type) {
        case "ADMIN":
            return {
                ...state,
                Admin:action.payload
            }
        case "ADDTOBASKET":
            console.log(action.payload)
            return {
                ...state,
                wines:state.wines.filter(e=>e.name!==action.payload.name),
                BasketWines:[...state.BasketWines,action.payload]
            }
        case 'DELETEFROMBASKET':
            return {
                ...state,
                wines:[...state.wines,action.payload],
                BasketWines:state.BasketWines.filter(e=>e.name!==action.payload.name)
            }
        case "TRUE":
            return {
                ...state,
                variable:true
            };
        case 'USER':
            return {
                ...state,
                user:action.payload
            }
        case 'DATA':
            return {
                ...state,
                data:action.payload
            }
        case 'VERIFY':
            return {
                ...state,
                verify:action.payload
            }
        case "WINES":
            return {
                ...state,
                wines:action.payload
            }
        case 'BASKET':
            return {
                ...state,
                BasketWines:action.payload
            } 
        default:  
            return state
    }
  }
export default reduxstate