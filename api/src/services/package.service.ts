import { NotFoundError } from '../helpers/apiError'
import { Package, PackageDetail } from '../types'

import fs from 'fs'


// TODO: Find how to make readFile wait rather than using readFileSync!!!

/* const loadPackageData = () => {
  const packArr: Package[] = []

  fs.readFile('./status.example', 'utf8', function(err, data) {
    if (err) throw err;
    
    const arr = data.toString().split('\n\n');
    arr.forEach(a => {
      const splitName = a.match(/Package\:\ (.*?)\n/)
      const matchDesc = a.match(/Description\:\ (.*?)\n/)
      const matchDeps = a.match(/Depends\:\ (.*?)\n/)
  
      if (splitName && matchDesc && matchDeps) {
        const packageName = splitName[1]
        const packageDesc = matchDesc[1]
        let packageDeps = matchDeps[1].split(', ')
        packageDeps = packageDeps.map(a => a.replace(/\(.*?\)/, '').trim())
        const thisPackage = new Package(packageName, packageDesc, packageDeps)
        packArr.push(thisPackage)
      }
     })
    console.log(packArr)
    return Promise.resolve(packArr)

    
  })
  //console.log('Array is', packArr)
  return Promise.resolve(packArr)
} */

const loadPackageData = () => {
  const packArr: Package[] = []

  const data = fs.readFileSync('./status.example', {encoding:'utf8', flag:'r'}) 
    
  const arr = data.toString().split('\n\n');
  arr.forEach(a => {
      const splitName = a.match(/Package\:\ (.*?)\n/)
      const matchDesc = a.match(/Description\:\ (.*?)\n/)
      const matchDeps = a.match(/Depends\:\ (.*?)\n/)
  
      if (splitName && matchDesc && matchDeps) {
        const packageName = splitName[1]
        const packageDesc = matchDesc[1]
        let packageDeps = matchDeps[1].split(', ')
        packageDeps = packageDeps.map(a => a.replace(/\(.*?\)/, '').trim())

        const thisPackage = new Package(packageName, packageDesc, packageDeps)
        packArr.push(thisPackage)
      }
     })

    const sortedList: Package[] = packArr.sort((a, b) => a.name.localeCompare(b.name));
    return Promise.resolve(sortedList)

}

const findAll = async (): Promise<Package[]> => {
  const packages = await loadPackageData()
  if (!packages) {
    throw new NotFoundError(`Data not found`)
  }
  //console.log("packages:", packages)
  return packages;
}


const findByName = async (name: string): Promise<PackageDetail> => {
    const packages = await loadPackageData()

    const match = packages.filter(obj => {
      return obj.name === name
    })
    if (!match) {
      throw new NotFoundError(`Data not found`)
    }
    const dependencies = packages.filter(obj => {
      if (obj.depends.includes(name))
      return obj.name
    })
    const dependenciesNames = dependencies.map(a => a.name)
    const foundPackage = new PackageDetail(match[0].name, match[0].description, match[0].depends, dependenciesNames)

    return foundPackage
}


export default {
    loadPackageData,
    findByName,
    findAll
  }