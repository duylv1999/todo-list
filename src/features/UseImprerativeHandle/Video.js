import { forwardRef } from 'react'

import Video1 from './Videos/video-1.mp4'

function Video(props, ref) {

    console.log(ref.current)
    return (
        <video
            ref={ref.current}
            width={280}
            src={Video1}
            controls
        />
    )
}

export default forwardRef(Video)
