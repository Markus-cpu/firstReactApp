import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import usersPhoto from "../../assets/images/users.png";

class UsersC extends React.Component {
    componentDidMount =()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.currentPage}&page=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
        });
    };

    onPageChanged =(pageNumber)=> {
         this.props.setCurrentPage(pageNumber);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageNumber}&page=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render =()=> {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for(let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            {pages.map(p => {
                //анонимная функция вызовется при клике на span
                //в обработчике события мы вызываем наш метод
               return <span onClick={(event) => { this.onPageChanged(p) }}
                            className={ this.props.currentPage === p && c.selectedPage }>{p}</span>
            })}
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