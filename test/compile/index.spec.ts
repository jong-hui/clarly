import fs from 'fs'
import { Compiler } from '../../modules/compiler'


const claryBody = fs.readFileSync(`${__dirname}/samples/App.cly`).toString()
const expectedJs = fs.readFileSync(`${__dirname}/samples/expected.js`).toString()

const options = {}

describe('compile', () => {
  const compiler = new Compiler(claryBody, options)

  expect(compiler.result.text).toBe(expectedJs)
})
