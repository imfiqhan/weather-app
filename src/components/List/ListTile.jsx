function ListTile({ icon, title, subtitle }) {
    return (
        <li className='flex items-center gap-2'>
            {icon && <img src={icon} alt="Icon" className='size-6' />}

            <div>
                <h3 className='font-semibold text-sm'>{title}</h3>
                <p className='font-light text-gray-600 text-sm'>{subtitle}</p>
            </div>
        </li>
    )
}

export default ListTile