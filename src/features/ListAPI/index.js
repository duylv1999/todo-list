import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "todos"]

export default function ListAPI() {
    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])
    const [goToTop, setGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // window.scrollY >= 200 tra ve true false
            setGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div>
            <div>
                <button>Click</button>
            </div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >{tab}</button>
            ))}

            <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title || post.name} </li>
                ))}
            </ul>

            {goToTop &&
                <button style={{ position: 'fixed', right: 20, bottom: 20 }}>
                    Go to top
                </button>
            }
        </div>
    );
}
