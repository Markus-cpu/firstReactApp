import React from "react";
import c from "./Users.module.css";
import Paginator from "../commonComponents/Paginators";
import User from "./User";

const Users =({currentPage, onPageChanged, totalUsersCount, pageSize, ...props})=> {

    return  <div className={c.blockUsers}>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
        />
        {
            props.users.map( u => <User
                key={u.id} user={u}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
            />)
        }
    </div>
}
export default Users