/* eslint-disable space-before-blocks */
/* eslint-disable indent */
import * as types from './mutation-types'

const mutations = {
  [types.SET_JOBSINFO](state, jobsinfo){
    state.jobsinfo = jobsinfo
  }
}

export default mutations