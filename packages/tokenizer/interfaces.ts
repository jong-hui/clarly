export type TokenType = 'openTag' | 'closeTag'
export type TokenParam = any

export interface Token {
  type: TokenType
  value: string
  params?: TokenParam[]
}