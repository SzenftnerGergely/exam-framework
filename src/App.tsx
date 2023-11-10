import { useState, useEffect } from 'react';
//@ts-ignore
import { makeServer } from '../api'
makeServer({ environment: 'development' })
import axios from "axios"
import LoadingMask from './components/LoadingMask';
import Client from './components/Client';

export function App() {
  const [clients, setClients] = useState([])
  const [clientInput, setClientInput] = useState("")
  const [loading, setLoading] = useState(false);

  console.log(clients);


  const fetchData = async () => {
    setLoading(true);

    try {
      await axios
        .get(`https://demoapi.com/api/vet/clients?search=`, { params: { search: clientInput } })
        .then((response) => {
          const result = response.data;
          setClients(result)
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };



  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className="flex h-screen items-center justify-around">

        <div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={clientInput}
            onChange={(e) => {
              setClientInput(e.target.value),
                fetchData()
            }}
          />
          <button type='submit' className="btn btn-outline btn-primary">Primary</button>

        </div>

        <div>
          {loading ? <LoadingMask /> :
            <div className='h-screen max-w-2xl flex items-center mx-auto gap-6'>
              {clients.map((client, index: number) =>
                <Client key={index} client={client} />
              )}
            </div>}
        </div>

      </div>
    </>
  )
}

export default App
