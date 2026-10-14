import { useState, useEffect } from "react"

export default function useTime() {

    const getTime = () => {
        const date = new Date()
        const hour = date.getHours().toString().padStart(2, '0')
        const minute = date.getMinutes().toString().padStart(2, '0')
        const second = date.getSeconds().toString().padStart(2, '0')

        const currentTime = hour + ':' + minute + ':' + second

        return {currentTime, second}
    }

    const [ time, setTime ] = useState(getTime().currentTime);

    const startSecond = 60 - Number(getTime().second)

    useEffect(() => {
        setTimeout(() => {
            setTime(getTime().currentTime)
        },startSecond)

        setInterval(() => {
            setTime(getTime().currentTime)
        }, 1000)
    }, [])

    return time
}

