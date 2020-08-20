import React from "react";
import c from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";

const User =({user, followingInProgress, unfollow, follow})=> {
    return (
            <div>
                <div className={c.blockUsers}>
                    <div className={c.avaButton}>
                        <NavLink to='/infoblock/:userId'>
                            <img alt={'#'} className={c.photoUser} src={user.photos.small != null ? user.photos.small : usersPhoto}/>
                        </NavLink>
                        <div className={c.button}>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={ ()=> {
                                    unfollow(user.id);
                                 } }>unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ ()=> {
                                    //в момент клика, вызывается то, что приходит из пропсов
                                    //функция санки(thunk)
                                    follow(user.id);
                                } }>follow</button>
                            }
                        </div>
                    </div>
                    <div className={c.infoUsers}>
                        <div>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </div>
                        <div>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
};
export default User;