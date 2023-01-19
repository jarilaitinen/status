import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

import Header from '../components/Header'
import { PackageDetail } from '../app/slices/packageSlice'
import { RootState, AppDispatch } from '../app/store'
import { fetchOnePackage } from '../app/services/packageService'

const testPackage: PackageDetail = 
    {
        name: 'test-package-1',
        description: 'a test package with some text',
        depends: ['some-other','one-more'],
        dependencies: ['this-thing','that-thing']
    }

const Single = () => {
    const dispatch = useDispatch<AppDispatch>()
    const thisPackage = useSelector((state: RootState) => state.packages.onePackage)
    const params = useParams();
    const packageName: string | undefined = params.name!;

    useEffect(() => {
        try {
          dispatch(fetchOnePackage(packageName))
          console.log('loading packages')
        } catch (error) {
          console.log(error)
        }
      }, [])
    return (
      <>
        <Header />
        <div>
            <h1>{thisPackage.name}</h1>
            <p>{thisPackage.description}</p>
            <h3>This package currently depends on:</h3>
            {thisPackage.depends.map( depend => {
                return(
                    <a href={'/' + depend}>{depend},</a>
                )
            })}
            <h3>Packages depending on this package:</h3>
            {thisPackage.dependencies.map( dependency => {
                return(
                    <a href={'/' + dependency}>{dependency},</a>
                )
            })}
        </div>
 
      </>
    )
  }
  export default Single