module.exports = function createStore(reducer) {
    let listeners = []
    let state

    const dispatch = action => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const getState = () => state

    const subscribe = listener => {
        listeners.push(listener)

        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    dispatch({})

    return { dispatch, getState, subscribe }
}
