function List({ className, children }) {
    return (
        <ul className={`flex flex-col gap-2 ${className}`}>
            {children}
        </ul>
    )
}

export default List