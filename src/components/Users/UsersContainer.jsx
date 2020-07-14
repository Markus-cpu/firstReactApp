import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
} from "../../Redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../API/api";




class UsersContainer extends React.Component {
    componentDidMount =()=> {
        //Preloader, анимация загрузки
        this.props.toggleIsFetching(true);
        //в данной функции происходит get-запрос на сервер
        //мы ее экспортируем из api.js
        //она возвращает нам promise(обещание)
        //затем(then) мы этот ответ(response) диспатчим в store
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                //когда данные получены, анимация исчезает
                //и отображаются данные, полученные с сервера
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount)
            });
    };
    onPageChanged =(pageNumber)=> {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render =()=> {
        return <>
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} onPageChanged={this.onPageChanged} follow={this.props.follow}
        unfollow={this.props.unfollow} currentPage={this.props.currentPage} isFetching={this.props.isFetching} />
        </>
    };
}

let mapStateToProps =(state)=> {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer);
