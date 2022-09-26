import React, {Fragment} from 'react';
import {useQuery} from "../../utils";
import {useGetSearchQuery} from "../../redux/api";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

const News = () => {
  const query = useQuery()

  const {data, isLoading} = useGetSearchQuery({type: 'news', q: query.get('q')})

  return (
    <Loader isLoading={isLoading}>
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
    </Loader>
  )
}

export default News;