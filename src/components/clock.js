import useTime from '../util/timeLogic'
import AnalogClock from './analogClock'

export default function Clock() {
    const time = useTime()

    return (
        <>
            <AnalogClock />
            <p className='digital-time'>{time}</p>
        </>
    )
}