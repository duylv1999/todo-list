import { ThemeContext } from './ThemeProvider'
import { useContext } from 'react';
import Content from './Content';
import './style.scss'

// Context
// Comp A => Comp B => Comp C

// 1. Create Context
// 2. Provider
// 3. Consumer 


function UseContext() {
    const context = useContext(ThemeContext)

    return (
        <div style={{ padding: '20px' }}>
            <button
                onClick={context.toggleTheme}
            >
                Change color
            </button>

            <Content />
        </div>
    )
}

export default UseContext;