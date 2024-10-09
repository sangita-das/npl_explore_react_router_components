export default function Friend({friend}) {
    const { category, title, status, content} = friend;

    return (
        <div>
        <h4>Title: {title}</h4>
        <p>Category: {category}</p>
        <h5>Status: {status}</h5>
        <h6>Content: {content}</h6>

        </div>
    )
}