import {
    findByName,
    findAll
  } from '../controllers/package.controller'

import request from 'supertest'

import app from '../app'

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

describe("Controller Tests", () => {
  it('should get back all packages', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body.length).toEqual(700)
  })
  it('should get back an existing package', async () => {
    const res = await request(app).get(`/${testPackage.name}`)
    expect(res.status).toBe(200)
    expect(res.body.name).toEqual(testPackage.name)
    expect(res.body.depends).toEqual(testPackage.depends)
  })
  it('should not get back a non-existing package', async () => {
    const res = await request(app).get(
      `/${nonExistingPackage}`
    )
    expect(res.status).toBe(500)
  })
  })