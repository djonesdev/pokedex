export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null ) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error, 'gone to catch localStorageState')
        return undefined
    }
}

export const saveStateToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.error(error, 'error writing to localStorage')
    }
}