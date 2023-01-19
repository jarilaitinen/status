import { createSlice } from '@reduxjs/toolkit';

import {
    fetchAllPackages,
  } from '../services/packageService';

export type Package = {
    name: string,
    description: string,
    depends: string[]
}

export type PackageDetail = {
    name: string,
    description: string,
    depends: string[],
    dependencies: string[]
}

const InitialPackage: PackageDetail = {
    name: '',
    description: '',
    depends: [],
    dependencies: []
}

export interface PackagesState {
    allPackages: Package[];
    onePackage: PackageDetail;
    isLoading: boolean;
    error: any
  }
  
const initialState: PackagesState = {
    allPackages: [],
    onePackage: InitialPackage,
    isLoading: false,
    error: undefined
  };

export const packageSlice = createSlice({
    name: 'packages', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllPackages.pending, (state: PackagesState) => {
            state.allPackages = [];
            state.isLoading = true;
          });
        builder.addCase(
        fetchAllPackages.fulfilled,
        (state: PackagesState, action) => {
            state.allPackages = action.payload.data;
            state.isLoading = false;
        }
        );
        builder.addCase(
        fetchAllPackages.rejected,
        (state: PackagesState, error) => {
            console.log(error);
            state.error = error;
            state.isLoading = false;
        }
        );
    },
})  

export default packageSlice.reducer;
