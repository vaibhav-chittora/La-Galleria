import React from 'react'

function Cards({ image }) {
    const tags = image.tags.split(',', 2)

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-5 bg-gray-100 shadow-gray-400">
            <img src={image.webformatURL} alt="" className="w-full rounded-xl" />
            <div className="px-6 py-4 max-h-[50%]">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by <a href={image.pageURL} className='underline'>{image.user}</a>
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div>
                {tags.map(tag => (
                    <span className='bg-green-200 mx-2 p-2 rounded-3xl cursor-pointer'>#{tag}</span>
                ))}
            </div>

        </div>



    )
}

export default Cards