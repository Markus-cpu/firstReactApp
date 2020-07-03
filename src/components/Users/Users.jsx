import React from "react";
import c from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";

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