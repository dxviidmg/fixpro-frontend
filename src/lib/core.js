import axios from 'axios';
import { getApiUrl, getHeaders } from "./utils";


export const getWorkOrders = async () => {
    const apiUrl = new URL(getApiUrl("workorder")); 
    try {
      const response = await axios.get(apiUrl, {
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      return error;
    }
  };


  export const getWorkOrderOptions = async () => {
    const apiUrl = new URL(getApiUrl("workorder-options")); 
    try {
      const response = await axios.get(apiUrl, {
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      return error;
    }
  };


  export const createWorkOrder = async (data) => {
    const apiUrl = new URL(getApiUrl("workorder"));
  
    try {
      const response = await axios.post(apiUrl, data, {
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      return error;
    }
  };