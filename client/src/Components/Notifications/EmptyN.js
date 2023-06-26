import { RiMovie2Line } from 'react-icons/ri'
import moment from 'moment'


export const Empty = ({message}) => {
    return (
        < div className='flex flex-col items-center justify-center gap-4'>
        <div className=' text-subMain'>
            <RiMovie2Line size={100} />
        </div>
        <p className='text-border text-sm'>{message}</p>
        </div>
    )
}

export const ShortUppercaseId = (id) => {
    return id.slice(0, 8).toUpperCase()
}



export const DateFormater = (date) => {
    return moment(date).format('LL')
}