import React from 'react';

const Card = ({data}) => (
  <div>
    <a href={data.link}>
      <h2 className='text-2xl text-blue-800'>
        {data.title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: data.description || data.summary }}>
      </div>
    </a>
    <hr className='mt-2'/>
  </div>
);

export default Card;