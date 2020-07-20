import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers } from "../../Redux/usersPage-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
    componentDidMount =()=> {
        //вынесли запрос на сервер в store-thunk
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChanged =(pageNumber)=> {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render =()=> {
        return <>
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} onPageChanged={this.onPageChanged} follow={this.props.follow}
        unfollow={this.props.unfollow} currentPage={this.props.currentPage} isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    };
};

let mapStateToProps =(state)=> {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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

export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer));
