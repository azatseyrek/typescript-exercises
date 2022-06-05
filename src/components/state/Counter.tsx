import {useReducer} from 'react'

const initialState = {count: 0}

type CounterState = {
    count: number
}

type CounterAction = {
    // type tanimizi dahada kucultebilirz. Yani action icerisindeki type `a string tanimladik ancak sadece "increment" ve "decrement" degerlerini almasi gerektiginide belirtebiliriz.
    // type: string bunu yerine soylede yazabiliriz. Sadece string olarak tanimlarsak dispatch ettigimizde string bir deger verirsek hata almayacagiz bu istedigimiz bir durum degil aslinda bu yuzden daha ozel bir tanimlama yapabiliriz bu sorunu cozmek icin.
    type: 'increment' | 'decrement'
    payload: number
}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload} //action iki parametre aliyor type ve payload
        case 'decrement':
            return {count: state.count - action.payload}

        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <br />
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
        </>
    )
}
