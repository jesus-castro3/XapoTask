import axios from 'axios';

export const fetchApi = ([url]) => 
    axios
      .get(url)
      .then(
        res => res.data
      )
      .catch(
        error => ({
          error:
            error.message || 'something really bad happened, bad hombres :('
        })
      )

