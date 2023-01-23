import { createSlice } from '@reduxjs/toolkit';

import {
    fetchAllPackages, fetchOnePackage,
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
    searchResults: Package[];
    onePackage: PackageDetail;
    isLoading: boolean;
    isSearching: boolean;
    error: any
  }
  
const initialState: PackagesState = {
    allPackages: [],
    searchResults: [],
    onePackage: InitialPackage,
    isLoading: false,
    isSearching: false,
    error: undefined
  };

export const packageSlice = createSlice({
    name: 'packages', 
    initialState,
    reducers: {
        searchPackages: (state, action) => {
        state.searchResults = state.allPackages.filter((pack) =>
          pack.name.toLowerCase().includes(action.payload)
        )
      },
      setIsSearching: (state, action: { payload: boolean }) => {
        if (!action.payload) state.searchResults = []
        state.isSearching = action.payload
      },
    },
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
        builder.addCase(fetchOnePackage.pending, (state: PackagesState) => {
            state.onePackage = InitialPackage;
            state.isLoading = true;
          });
        builder.addCase(
        fetchOnePackage.fulfilled,
        (state: PackagesState, action) => {
            state.onePackage = action.payload.data;
            state.isLoading = false;
        }
        );
        builder.addCase(
            fetchOnePackage.rejected,
            (state: PackagesState, error) => {
                console.log(error);
                state.error = error;
                state.isLoading = false;
            }
            );
    },
})  

export const {
    searchPackages,
    setIsSearching,
  } = packageSlice.actions
export default packageSlice.reducer;
