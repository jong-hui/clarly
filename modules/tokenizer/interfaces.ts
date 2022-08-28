export type TokenType = 'String'
export type TokenParam = any

export interface Token {
  type: TokenType
  value: string
  params?: TokenParam[]
}