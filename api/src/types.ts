export class Package {
    name: string
    description: string
    depends: string[]
    constructor(name: string, description: string, depends: string[]) {
      this.name = name;
      this.description = description;
      this.depends = depends;
    }
  }

  export class PackageDetail {
    name: string
    description: string
    depends: string[]
    dependencies: string[]
    constructor(name: string, description: string, depends: string[], dependencies: string[]) {
      this.name = name;
      this.description = description;
      this.depends = depends;
      this.dependencies = dependencies;
    }
  }