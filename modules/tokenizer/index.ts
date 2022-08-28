import { Token } from "./interfaces"

const TAG_REGEX = new RegExp(/[a-z][A-Z]/)

export const tokenizer = (source: string) => {
  const tokens: Token[] = []
  let current = 0
  let openingTag: boolean = false
  let closingTag: boolean = false

  while(current <= source.length) {
    let char = source[current]

    if (char === '<') {
      openingTag = true
      current++

      continue
    }

    if (openingTag) {
      let value = ''

      while (char !== '>' && char !== '/') {
        if (char === '/') {
          current++
          break
        }

        value += char
        char = source[++current]
      }

      tokens.push({
        type: 'openTag',
        value,
      })
      openingTag = false
    }

    current++
  }

  return tokens
}