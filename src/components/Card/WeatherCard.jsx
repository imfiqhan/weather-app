import Card from "./Card"

function WeatherCard({ day, temperature, icon }) {
    return (
        <Card>
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-500">{day}</p>
                <img src={icon} alt="Weather Icon" className="w-full" />
                <p className="text-xl font-semibold">{temperature}°C</p>
            </div>
        </Card>
    )
}

export default WeatherCard