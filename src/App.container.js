import App from './App'
import { connect } from 'react-redux'

const mapStatetoprops = (state) => {
    var data = [state.number,state.status]
    return {
        number: state.number,
        status: state.status,
        
        data
    }
    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        add : () => dispatch ({type : 'ADD'}),
        sub : () => dispatch ({type : 'SUB'})
        
    }
}

export default connect(mapStatetoprops, mapDispatchToProps)(App)