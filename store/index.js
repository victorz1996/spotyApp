export const state = () => ({
  configHeader: {
    headers: {
      authorization: `Bearer BQBl9b-zPpuKliFQqKDdbVmafM8keKQFiDZ98kzJzspbUwyp8PEVFtBhXzws4Ekib_O1xgNVHy5V3IQ8wNU`,
    },
  },
})

export const getters = {
  getConfigHeader(state) {
    return state.configHeader
  },
}
