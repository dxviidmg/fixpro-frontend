import axios from 'axios';
import { getApiUrl, getHeaders } from "./utils";

//const entertainmentStreamingUrl = process.env.REACT_APP_API_URL;
const entertainmentStreamingUrl = 'http://localhost:8000/';

const apiUrl = `${entertainmentStreamingUrl}api/api-token-auth/`;





export const getWorkOrders = async () => {
    const apiUrl = new URL(getApiUrl("workorder"));

    console.log('apiUrl',apiUrl)
 
    try {
      const response = await axios.get(apiUrl, {
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      return error;
    }
  };
