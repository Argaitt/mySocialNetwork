const CHECK_BRACKET = 'CHECK-BRACKET';

let initilState = {
    result: ''
};

const funReducer = (state = initilState, action) => {
    const checkBrackets = (str) => {
        let stack = [];
        if (str.length === 0) {
            state.result = '';
            return 0;
        }
        for (let i = 0; i < str.length; i++){
            if (str[i] === '('){
                stack.push(str[i]);
                continue
            }else if (str[i] === ')')
            {
                if(stack.pop() === undefined){
                    state.result = false.toString();
                    return 0;
                };
            }
        }
        stack.length === 0 ? state.result = true.toString() : state.result = false.toString();
    }

    switch (action.type){
        case CHECK_BRACKET:
            checkBrackets(action.str);
            return state;
        default:
            return state;
    }

}

export const  checkBracketActionCreator = (str) => ({type: CHECK_BRACKET, str: str});

export default funReducer;