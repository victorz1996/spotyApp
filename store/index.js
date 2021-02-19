export const state = () => ({
  token: `Bearer BQBfazJ0vY1T1Km5uBx0YjhewQ7y0ooRclSNSbqIHSp0giToxiQ4-kIt5bZ05xjGfirX0oboSN5s8XlYhT0`,
})

export const getters = {
  getToken(state) {
    return state.token
  },
}
