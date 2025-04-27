function Card({ className, children, title }) {
    return (
        <div className={`bg-white rounded-lg p-4 ${className}`}>
            {title && <h2 className="text-xl mb-2 font-light text-gray-500">{title}</h2>}
            {children}
        </div>
    )
}

export default Card