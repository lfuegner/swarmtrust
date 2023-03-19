import Link from 'next/link'

const Announcement = () => {
    return (
        <div className='announcement'>
            <div className='announcement-wrapper'>
                <Link href = "/" className='announcement-link'>Announcement</Link>
            </div>
        </div>
    )
}

export default Announcement