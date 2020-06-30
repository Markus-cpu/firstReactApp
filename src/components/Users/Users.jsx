import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import usersPhoto from "../../assets/images/users.png";

const Users =(props)=> {
    const getUsers =()=> {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    };
    return <div>
        <button onClick={getUsers} >Get Users</button>
        {
        props.users.map( u => <div key={u.id}>
            <div className={c.blockUsers}>
                <div className={c.avaButton}>
                    <img className={c.photoUser} src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                    <div className={c.button}>
                        {
                            u.followed ? <button onClick={ ()=> { props.unfollow(u.id) } }>unfollow</button>
                            : <button onClick={ ()=> { props.follow(u.id)} }>follow</button>
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