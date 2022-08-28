import fs from 'fs'
import { Compiler } from '../../modules/compiler'


const claryBody = fs.readFileSync(`${__dirname}/samples/App.cly`).toString()
const expectedJs = fs.readFileSync(`${__dirname}/samples/expected.js`).toString()

const options = {}

describe('compile', () => {
  it('compiled', () => {
    const compiler = new Compiler(claryBody, options)
  
    expect(compiler.result.text).toBe(expectedJs)
  })

  it('tokened', () => {
    const compiler = new Compiler(claryBody, options)

    expect(compiler.tokens).toEqual([
      {
        type: 'openTag',
        value: 'script',
      },
      {
        type: 'string',
        value: 'const',
      },
      {
        type: 'string',
        value: 'title',
      },
      {
        type: 'string',
        value: '=',
      },
      {
        type: 'string',
        value: `"IT's title"`
      },
      {
        type: 'closeTag',
        value: 'script'
      },
      {
        type: 'openTag',
        value: 'h2',
      },
      {
        type: 'string',
        value: '{title}'
      },
      {
        type: 'closeTag',
        value: 'h2'
      }
    ])
  })
})
