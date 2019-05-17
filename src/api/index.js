import axios from 'axios'

/**
 *
 * @param {Strign} username 通过username换取用户信息
 * @returns {void}
 */
export function getUserInfo() {
  return axios.get('/api/user', function(res) {
    return res
  })
}

