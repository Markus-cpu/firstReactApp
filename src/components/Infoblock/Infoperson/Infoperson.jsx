import React from 'react';
import c from './Infoperson.module.css';
import Preloader from "../../Preloader/Preloader";
//import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const Infoperson = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div className={c.info_block} >
                <img className={c.avatar} src={props.profile.photos.large} alt="#" />
                <div className={c.description}>
                    <div className={c.infoname}>{props.profile.fullName}</div>
                    <div className={c.info}>
                        <div className={c.text}>{props.profile.aboutMe}</div>
                        <span className={c.date}>{props.profile.contacts.facebook}</span>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Infoperson;
