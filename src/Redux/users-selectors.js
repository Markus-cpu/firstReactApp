import {createSelector} from "reselect";


export const getPageSize =state=> state.usersPage.pageSize
export const getTotalUsersCount =state=> state.usersPage.totalUsersCount
export const getCurrentPage =state=> state.usersPage.currentPage
export const getIsFetching =state=> state.usersPage.isFetching
export const getFollowingInProgress =state=> state.usersPage.followingInProgress

//более сложный селектор, использует
//примитивный селектор
const getUserSelector =state=> state.usersPage.users
//селектор имеет зависимость users
//users пришли в селектор из getUserSelector
export const getUser = createSelector(getUserSelector,(users)=> {
    return users.filter(u => true)
})
