import React from "react";
import c from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {followAPI, unfollowAPI} from "../../API/api";
import {toggleIsFollowingInProgress} from "../../Redux/usersPage-reducer";



const Users =(props)=> {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return  <div>
        {pages.map(p => {
            //анонимная функция вызовется при клике на span
            //в обработчике события мы вызываем наш метод
            return <span onClick={(e) => { props.onPageChanged(p) }}
                         className={ props.currentPage === p && c.selectedPage }>{p}</span>
        })}
        {props.isFetching ? <Preloader /> : null}
        {
            props.users.map( u => <div key={u.id}>
                <div className={c.blockUsers}>
                    <div className={c.avaButton}>
                        <NavLink to='/infoblock/:userId'>
                            <img className={c.photoUser} src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                        </NavLink>

                        <div className={c.button}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ ()=> {
                                    props.toggleIsFollowingInProgress(true, u.id);
                                    unfollowAPI.unfollow(u.id)
                                        .then(data => {
                                            if(data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFollowingInProgress(false, u.id);
                                        });
                                 } }>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ ()=> {
                                    props.toggleIsFollowingInProgress(true, u.id);
                                    followAPI.follow(u.id)
                                        .then(data => {
                                            if(data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingInProgress(false, u.id);
                                        });
                                } }>follow</button>
                            }
                        </div>

                    </div>
                    <div className={c.infoUsers}>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;