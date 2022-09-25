import React, {Fragment} from 'react';
import {useQuery} from "../../utils";
import {useGetSearchQuery} from "../../redux/api";
import Card from "../../components/Card";

const News = () => {
  const query = useQuery()

  const {data} = useGetSearchQuery({type: 'news', q: query.get('q')})

  console.log(data)
  return (
    <div className='containers'>
      <h1 className='text-2xl mb-5 mt-3'>News - {query.get('q')}</h1>

      <div className="space-y-4">
        {data?.entries?.map((result, idx) => (
          <Fragment key={idx}>
            <Card
              data={result}
            />
          </Fragment>
        ))
        }
      </div>
    </div>
  )
}

export default News;