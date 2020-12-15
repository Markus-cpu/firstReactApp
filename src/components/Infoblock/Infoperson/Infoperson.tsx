import React, {ChangeEvent} from 'react'
import c from './Infoperson.module.css'
import Preloader from '../../Preloader/Preloader'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import usersPhoto from '../../../assets/images/users.png'
// Types
import { ProfileType } from '../../../types/types'

type TProps = {
    profile: ProfileType
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (e: string) => void
}

export const Infoperson: React.FC<TProps> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected =(e: ChangeEvent<HTMLInputElement>)=> {
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
                        <div className={c.text}>{profile.lookingForAJob}</div>
                        <span className={c.date}>{profile.contacts.facebook}</span>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

