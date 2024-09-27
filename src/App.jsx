import { useEffect } from 'react'
import './App.css'
import ImageCard from './cards/Cards'
import Navbar from './navbar/navbar'

function App() {
  useEffect(() => {
    async function fetchImages() {
      try {
        const url = 'https://pixabay.com/api/?key=46184021-ab03fabc0d1c124ec59d8a3e9&q=yellow+flowers&image_type=photo&pretty=true'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        // console.log("largeImageURL",data.hits[2].largeImageURL);
        // console.log("previewURL ",data.hits[2].previewURL);
        console.log("webformatURL ",data.hits[2].webformatURL);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages()
  }, [])

  return (
    <>
      {/* <h1 className='text-5xl text-center bg-green-200 p-5 font-bold'>La - Galleria</h1> */}
      <Navbar />
      <ImageCard />
    </>
  )
}

export default App
