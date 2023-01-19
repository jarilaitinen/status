import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const URL = 'http://localhost:8087/';

export const fetchAllPackages = createAsyncThunk(
    'packages/fetch',
  
    async () => {
      try {
        const res = await axios.get(URL); 
        console.log(res.data) 
        return {
          data: res.data,
          status: res.status,
        };
      } catch (error) {
        return {
          error: error
        }
      }
    }
  );

export const fetchOnePackage = createAsyncThunk(
    'packages/fetchone',
  
    async (name: string) => {
      try {
        const res = await axios.get(`${URL}${name}`); 
        console.log(res.data) 
        return {
          data: res.data,
          status: res.status,
        };
      } catch (error) {
        return {
          error: error
        }
      }
    }
  );