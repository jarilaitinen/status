import { createSlice } from '@reduxjs/toolkit';

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