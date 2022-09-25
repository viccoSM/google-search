import {useQuery} from "../../utils";
import Card from "../../components/Card";
import {useGetSearchQuery} from "../../redux/api";
import {Fragment} from "react";

const All = () => {
  const query = useQuery()

  const {data} = useGetSearchQuery({type: 'search', q: query.get('q')})

  return (
    <div className="containers">
      <h1 className='text-2xl mb-5 mt-3'>All - {query.get('q')}</h1>
      <div className="space-y-4">
        {data?.results?.map((result, idx) => (
            <Fragment key={idx}>
              <Card
                data={result}
              />
            </Fragment>
          ))
        }
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

export default All;