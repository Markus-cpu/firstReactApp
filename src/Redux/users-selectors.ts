import {createSelector} from 'reselect'
import {AppStateType} from './redux-store'


export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress

//более сложный селектор, использует
//примитивный селектор
const getUserSelector = (state: AppStateType) => state.usersPage.users
//селектор имеет зависимость users
//users пришли в селектор из getUserSelector
export const getUser = createSelector(getUserSelector,(users) => {
    return users.filter(u => true)
})
