const appVersion = "1.2.3";

console.log(Bun.semver.satisfies(appVersion, "1.x"))
console.log(Bun.semver.satisfies(appVersion, "2.x"))
console.log(Bun.semver.satisfies(appVersion, ">=1.0.0"))
console.log(Bun.semver.satisfies(appVersion, "<2.0.0"))
console.log(Bun.semver.satisfies(appVersion, "^1.1.1"))
