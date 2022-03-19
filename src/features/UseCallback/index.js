import React, { useCallback, useState } from "react";
import Content from './Content'

function FeaturesUseCallback() {

    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])


    return (
        <div style={{ padding: '20px' }}>
            <Content onIncrease={handleIncrease} />
            <p>{count}</p>

        </div>
    )
}


export default FeaturesUseCallback;