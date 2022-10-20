import {HistoryTypes} from "../types";

const { ADD_COMMIT, DELETE_COMMIT, DELETE_ALL_COMMITS } = HistoryTypes;

export const addCommit = (commit) => ({

  type: ADD_COMMIT,
  commit: commit
})

export const deleteCommit = (id) => ({

  type: DELETE_COMMIT,
  id: id.id
})

export const deleteAllCommits = () => ({

  type: DELETE_ALL_COMMITS
})