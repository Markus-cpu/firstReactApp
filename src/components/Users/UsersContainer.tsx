import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers } from "../../Redux/usersPage-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUser
} from "../../Redux/users-selectors";
import Preloader from "../Preloader/Preloader";

// Types
import {UsersType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount =()=> {
        //вынесли запрос на сервер в store-thunk
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    };

    onPageChanged =(pageNumber: number)=> {
        const {getUsers, pageSize} = this.props
        getUsers(pageNumber, pageSize)
    };

    render =()=> {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            {}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    };
}
let mapStateToProps =(state: AppStateType)=> {
    return {
        users: getUser(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};
//рефакторинг функции mapDispatchToProps
//она нам больше не нужна, так-как мы можем
//передавать объект вторым параметром в connect
/*let mapDispatchToProps =(dispatch)=> {
    return {
        follow: (usersId)=> {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId)=> {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber)=> {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount)=> {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching)=> {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
};*/
export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers}),
)(UsersContainer);
