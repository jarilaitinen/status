import Header from '../components/Header'

import { PackageDetail } from '../app/slices/packageSlice'

const testPackage: PackageDetail = 
    {
        name: 'test-package-1',
        description: 'a test package with some text',
        depends: ['some-other','one-more'],
        dependencies: ['this-thing','that-thing']
    }

const Single = () => {
    return (
      <>
        <Header />
        <div>
            <h1>{testPackage.name}</h1>
            <p>{testPackage.description}</p>
            <h3>This package currently depends on:</h3>
            {testPackage.depends.map( depend => {
                return(
                    <a href={'/' + depend}>{depend},</a>
                )
            })}
            <h3>Packages depending on this package:</h3>
            {testPackage.dependencies.map( dependency => {
                return(
                    <a href={'/' + dependency}>{dependency},</a>
                )
            })}
        </div>
 
      </>
    )
  }
  export default Single