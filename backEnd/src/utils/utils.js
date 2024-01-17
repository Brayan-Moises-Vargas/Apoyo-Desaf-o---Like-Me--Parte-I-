import { ERRORS } from '../helpers/errors.js'

export const findError = (code) => {
  return ERRORS.filter((err) => err.code == code)
}