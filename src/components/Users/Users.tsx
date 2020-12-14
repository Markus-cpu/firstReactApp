import React from "react";
import c from "./Users.module.css";
import Paginator from "../commonComponents/PaginationExample";
import User from "./User";
import { UsersType } from '../../types/types'

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> =({
                                       currentPage,
                                       onPageChanged,
                                       totalUsersCount,
                                       pageSize,
                                       users,
                                       followingInProgress,
                                       follow,
                                       unfollow })=> {

    return  <div className={c.blockUsers}>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
        />
        {
            users.map( u => <User
                key={u.id} user={u}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
            />)
        }
    </div>
}
export default Users