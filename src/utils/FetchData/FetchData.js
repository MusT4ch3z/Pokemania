import { useState, useEffect } from 'react'

const FetchData = () => {
  const [data, setData] = useState([], { isLoaded: false });
  const [searchData, setSearchData] = useState();

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0'
  const fetchData = () => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        setData(data, data.isLoaded = true)
        return data
      })
      .then(data => {
        setSearchData(data);
        console.log('search data is', data, searchData)
      })
  }



  useEffect(() => {
    fetchData()
  }, [data.isLoaded]);

}

export default FetchData