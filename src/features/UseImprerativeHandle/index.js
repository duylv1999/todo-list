import Video from './Video.js'
import { useRef } from 'react'

function AppVideo() {

    const videoInput = useRef()

    return (
        <div style={{ padding: '20px' }}>
            <Video ref={videoInput} />
            <button> Play </button>
            <button> Pause </button>
        </div>
    )
}

export default AppVideo