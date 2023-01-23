import packageService from '../services/package.service' 
import { Package, PackageDetail } from '../types'

const testPackage: PackageDetail = {
    name: 'dash',
    description: `POSIX-compliant shell
    The Debian Almquist Shell (dash) is a POSIX-compliant shell derived
    from ash.
    .
    Since it executes scripts faster than bash, and has fewer library
    dependencies (making it more robust against software or hardware
    failures), it is used as the default system shell on Debian systems.`,
    depends: ['debianutils', 'dpkg'],
    dependencies: []
}

const nonExistingPackage = 'doesnt-exist'

describe('Package service', () => {
    it('should get a package with name', async () => {

        const found = await packageService.findByName(testPackage.name)
        expect(found.name).toEqual(testPackage.name)
        expect(found.depends).toEqual(testPackage.depends)
        expect(found.dependencies).toEqual(testPackage.dependencies)
      })

    it('should not get a non-existing package', async () => {
        expect.assertions(1)
        return packageService.findByName(nonExistingPackage).catch((e) => {
            expect(e.message).toMatch(`Package not found`)
        })
    })
    it('should get all packages', async () => {
        const found = await packageService.findAll()
        expect(found.length).toEqual(700)
        found.forEach((pack) => {
            expect(pack.name).not.toBeNull
            expect(pack.description).not.toBeNull
        })
    })
})