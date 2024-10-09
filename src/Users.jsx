import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect (() => {
        fetch('https://jsonplaceholder.org/posts')
        .then(res => res.json())
        .then(data => setUsers(data)) 
    }, [])
    return(
        <div>
        <h2>Users: {users.length}</h2>
        </div>
    )
}