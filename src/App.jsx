import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Cards from './cards/Cards'

function App() {
  const [images, setImages] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchImages() {
      try {
        const url = `https://pixabay.com/api/?key=46184021-ab03fabc0d1c124ec59d8a3e9&q=${searchQuery}&image_type=photo&pretty=true`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.hits);
        setImages(data.hits)
        // console.log("webformatURL ", data.hits[2].webformatURL);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages()
  }, [searchQuery])


  return (
    <>
      <h1 className='text-5xl text-center bg-green-200 p-5 font-bold'>La - Galleria</h1>
      <Navbar handleSearch={setSearchQuery} />
      { <div className='grid grid-cols-2 md:grid-cols-4 gap-4 h-[100%] p-5'>
        {images.map(image => (
          <Cards image={image} />
        ))}
      </div>}
    </>
  )
}

export default App
