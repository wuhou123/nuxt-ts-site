const mutations = {
  /**
   * 初始化参数
   * @param {Object} data - 设备信息
   */
  init(state: any, data: any) {
    Object.assign(state, data)
  },
  searchChange(state: any, data: any) {
    state.search = data
  },
  loadChange(state: any) {
    state.first_load = false
  },
  setFooterData(state: any, data: any) {
    state[data.type] = data.data
  }
}

export default mutations
