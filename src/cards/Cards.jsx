import React from 'react'
import { AiOutlineEye, AiOutlineHeart, AiOutlineDownload } from 'react-icons/ai';


function Cards({ image }) {
    const tags = image.tags.split(',', 2)

    function clickImage() {
        window.open(image.largeImageURL, '_blank')
    }

    return (
        <div className="max-w-sm m-2 rounded-lg overflow-hidden shadow-xl cursor-pointer bg-gray-100 shadow-gray-400 group"
            onClick={() => clickImage()}
        >
            <div className="relative">
                <img
                    src={image.webformatURL}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{
                        aspectRatio: '1/1',
                        objectFit: 'cover',
                        maxHeight: '100%',
                        maxWidth: '100%',
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="font-bold text-white text-xl mb-2">
                        Photo by {image.user}
                    </div>
                    <div>
                        <div className="flex justify-between text-white mb-2">
                            <span className="flex items-center"><AiOutlineEye className="mr-1" /> {image.views}</span>
                            <span className="flex items-center"><AiOutlineHeart className="mr-1" /> {image.likes}</span>
                            <span className="flex items-center"><AiOutlineDownload className="mr-1" /> {image.downloads}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href={image.pageURL} className="text-white underline">View on Pixabay</a>
                            <div>
                                {tags.map((tag, index) => (
                                    <span key={index} className='bg-[rgba(255,255,255,0.5)] text-dark mx-1 px-1 py-1 rounded-full text-sm inline-block'>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
