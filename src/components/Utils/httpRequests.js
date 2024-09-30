import axios from 'axios';

export const handleHttpRequest = async (method, url, data = null, onSuccess, onError) => {
  const urlFinal = `${process.env.REACT_APP_REQUEST_URL}/${url}`;

  try {
    const config = {
      method: method.toLowerCase(),
      url: urlFinal,
      data: data,
      withCredentials: true
    };
    const response = await axios(config);
    


    
    const { success, message } = response.data;
    if (success) {
      onSuccess(message);
    } else {
      onError(message);
    }

   }
 catch (error) {
    console.error(`Error during ${method.toUpperCase()} request:`, error);
    onError("An error occurred during the request.");
  }

   
};
