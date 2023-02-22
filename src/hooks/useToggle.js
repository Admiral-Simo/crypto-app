import { useState } from 'react'

const useToggle = ({defaultState}) => {
    const [state, setState] = useState(defaultState)
    
    const toggleState = () => {
        setState(prev => !prev)
    }

    return [state, toggleState]
}

export default useToggle