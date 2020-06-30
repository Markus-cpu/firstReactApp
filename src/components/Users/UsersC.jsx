import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import usersPhoto from "../../assets/images/users.png";

class UsersC extends React.Component {
    getUsers =()=> {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    };
    render =()=> {
        return <div>
            <button onClick={this.getUsers} >Get Users</button>
            {
                this.props.users.map( u => <div key={u.id}>
                    <div className={c.blockUsers}>
                        <div className={c.avaButton}>
                            <img className={c.photoUser} src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                            <div className={c.button}>
                                {
                                    u.followed ? <button onClick={ ()=> { this.props.unfollow(u.id) } }>unfollow</button>
                                        : <button onClick={ ()=> { this.props.follow(u.id)} }>follow</button>
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

}

export default UsersC;