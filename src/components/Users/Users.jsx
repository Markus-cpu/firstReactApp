import React from "react";
import c from "./Users.module.css";

const Users =(props)=> {

    return <div>{
        props.users.map( u => <div key={u.id}>
            <div className={c.blockUsers}>
                <div className={c.avaButton}>
                    <img className={c.photoUser} src={u.avatarUrl}/>
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
                            {u.fullname}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
    </div>
};

export default Users;