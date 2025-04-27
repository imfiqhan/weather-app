import './App.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/outline'
import List from './components/List/List'
import Card from './components/Card/Card'
import WeatherCard from './components/Card/WeatherCard'
import clearDay from './assets/weather-icons/clear-day.svg'
import ListTile from './components/List/ListTile'

function App() {


  return (
    <>
      <div className='bg-white shadow-2xl rounded-2xl overflow-hidden'>
        <div className='flex flex-col md:flex-row'>
          <div className='bg-gray-100 p-8 flex flex-col gap-8'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <MagnifyingGlassIcon className='size-5 text-gray-500' />
                <input type="search" name="place" id="placce" placeholder='Search for places' />
              </div>
              <button className='bg-gray-200 text-gray-500 rounded-full p-2 flex items-center justify-center hover:bg-gray-300'>
                <MapPinIcon className='size-4 text-gray-500' />

              </button>
            </div>
            <img src={clearDay} alt="" />
            <p className='text-9xl'>12 <span className='text-4xl'>°C</span></p>
            <p>Monday, 16:00</p>
            <hr className='text-gray-300' />

            <List>
              <ListTile title="Mostly Cloudy" icon={clearDay}></ListTile>
              <ListTile title="Mostly Cloudy"></ListTile>
            </List>

            <div className='relative aspect-video max-w-96 rounded-xl overflow-hidden'>
              <p className='absolute w-full h-full text-white content-center text-center font-semibold bg-black/30 backdrop-opacity-50 text-2xl'>Jakarta</p>
              <img src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
          <div className='bg-gray-200 p-8 flex flex-col gap-8 w-full'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2'>
                <input type="search" name="place" id="placce" placeholder='Search for places' />
              </div>
              <button className='bg-gray-200 text-gray-500 rounded-full p-2 flex items-center justify-center hover:bg-gray-300'>
              </button>
            </div>
            <div className='grid grid-cols-4 lg:grid-cols-7 gap-4'>
              <WeatherCard day="Mon" temperature={12} icon={clearDay} />
              <WeatherCard day="Tue" temperature={12} icon={clearDay} />
              <WeatherCard day="Wed" temperature={12} icon={clearDay} />
              <WeatherCard day="Thu" temperature={12} icon={clearDay} />
              <WeatherCard day="Fri" temperature={12} icon={clearDay} />
              <WeatherCard day="Sat" temperature={12} icon={clearDay} />
              <WeatherCard day="Sun" temperature={12} icon={clearDay} />
            </div>
            <h2 className='text-xl font-semibold'>Today's Highlight</h2>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <Card className="aspect-video" title="Wind Status">
                <p className='text-2xl font-semibold'>7 km/h</p>
                <p className='text-gray-500'>North</p>
              </Card>
              <Card className="aspect-video" title="Humidity">
                <p className='text-2xl font-semibold'>72%</p>
                <p className='text-gray-500'>Rainy</p>
              </Card>
              <Card className="aspect-video" title="Visibility">
                <p className='text-2xl font-semibold'>10 km</p>
                <p className='text-gray-500'>Good</p>
              </Card>
              <Card className="aspect-video" title="Air Quality">
                <p className='text-2xl font-semibold'>Good</p>
                <p className='text-gray-500'>Good</p>
              </Card>
              <Card className="aspect-video" title="Air Quality">
                <p className='text-2xl font-semibold'>Good</p>
                <p className='text-gray-500'>Good</p>
              </Card>
              <Card className="aspect-video" title="Air Quality">
                <p className='text-2xl font-semibold'>Good</p>
                <p className='text-gray-500'>Good</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App
