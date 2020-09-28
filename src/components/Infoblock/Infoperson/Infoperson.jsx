import React from 'react';
import c from './Infoperson.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import usersPhoto from "../../../assets/images/users.png";

const Infoperson = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader />;
    }
    const onMainPhotoSelected =(e)=> {
        if(e.target.files.length) {
            savePhoto(e.target.files[1])
        }
    }
    return (
        <div>
            <div className={c.info_block} >
                <img className={c.avatar} src={profile.photos.large || usersPhoto} alt="#" />
                {!isOwner && <input type={"file"} onChange={ onMainPhotoSelected }/> }
                <div className={c.description}>
                    <div className={c.infoname}>{profile.fullName}</div>
                    <div className={c.info}>
                        <div className={c.text}>{profile.aboutMe}</div>
                        <span className={c.date}>{profile.contacts.facebook}</span>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Infoperson;
