import React from 'react';
import {useQuery} from "../../utils";
import {useGetSearchQuery} from "../../redux/api";

const Images = () => {
  const query = useQuery()

  const {data} = useGetSearchQuery({type: 'image', q: query.get('q')})

  return (
    <div className='containers mb-6'>
      <h1 className='text-2xl mb-5 mt-3'>Images - {query.get('q')}</h1>
      <div className="space-y-4 flex flex-wrap -m-1 md:-m-2">
        {data?.image_results.map((result, idx) =>(
          <div className="flex flex-wrap w-1/3 r" key={idx}>
            <div className="relative w-full p-1 md:p-2">
              <img
                alt={result?.image.alt}
                className="block object-cover object-center w-full h-full rounded-lg"
                src={result?.image.src}
              />
              <a href={result?.link.href} className='after:absolute after:inset-0' > </a>
            </div>
          </div>
        ))}
      </div>

      {data?.answers.length > 0 &&(
        <div className='my-5'>
          <h3 className='text-xl'>
            Peenulusuran Terkait
          </h3>
          <div className="space-y-2 space-x-2">
            {data?.answers.map((item, idx) => (
              <button
                key={idx}
                className='border-2 rounded-2xl px-3 py-1'
              >
                <a href={`/search?q=${item}`}>{item}</a>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;