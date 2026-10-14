import useTime from "../util/timeLogic";

export default function AnalogClock() {
    const time = useTime();

    const [hour, minute, second] = time.split(":").map(Number);

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = (hour % 12) * 30 + minute * 0.5;

    return (
        <div className="clock">
            {Array.from({ length: 60 }, (_, i) => (
                <div
                    key={i}
                    className={`mark ${i % 5 === 0 ? "hour-mark" : ""}`}
                    style={{ "--i": i }}
                />
            ))}

            <div className="center">
                <div
                    className="hour-arm"
                    style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
                />
                <div
                    className="minute-arm"
                    style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
                />
                <div
                    className="second-arm"
                    style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
                />
                <div className="center-dot" />
            </div>
        </div>
    );
}