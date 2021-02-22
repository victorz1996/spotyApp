export const state = () => ({
  configHeader: {
    headers: {
      authorization: `Bearer BQAahvYgvSrOdZ7DvoK8B21AuiOCb0DLubENGVCmKJCaGyVi5EczR4IGcat-pjq9vC7267RU9HnE2cHJAk0`,
    },
  },
})

export const getters = {
  getConfigHeader(state) {
    return state.configHeader
  },
}
