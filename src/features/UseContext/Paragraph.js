import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}>Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</div>
    )
}

export default Paragraph;