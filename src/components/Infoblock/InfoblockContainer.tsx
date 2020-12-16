import React from 'react';
import {addPost, getProfile, getStatus, savePhoto, updateStatus} from '../../Redux/contentPage-reducer';
import {connect} from "react-redux";
import Infoblock from "./Infoblock";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {PostType, ProfileType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

//данная контейнерная компонента является оберткой для обычной компоненты (Infoblock)
//сюда приходят данные и методы из store/state
//для того чтобы оставить нашу обычную компоненту чистой, без всякой лишней информации из
//мира store(BLL)
/*const InfoblockContainer = (props) => {
    let state = props.store.getState();
    let addPost =()=> {
        let action = addPostActionCreator();//функция actionCreator(для создания action object
        props.store.dispatch(action);
    };
    let PostChange =(text)=> {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        <div>
          <Infoblock addPost={addPost} updateNewPostChange={PostChange} mypostData={state.contentPage.mypostData}
                     myNewPost={state.contentPage.myNewPost} dialogsData={state.messagesPage.dialogsData}/>
        </div>
    )
};*/

type MapStatePropsType =  {
    match?: any
    history?: any
    posts: Array<PostType>
    addNewPostText: string
    profile: ProfileType | null
    status: string
    authorizedUserId: any
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: string) => void
    addPost: (addNewPostText: string, postId: number) => void
}

type TState = {
    match: any
}

type TProps = MapStatePropsType & MapDispatchPropsType

class InfoblockContainer extends React.Component<TProps> {
    refreshProfile() {
        //при первоночальном рендеринге компоненты,
        //происходит ниже вся логика
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);//запрос на сервер
        this.props.getStatus(userId);//запрос на сервер
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: MapStatePropsType, prevState: TState) {
        //здесь мы сравниваем userId c предыдущим userId
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render =()=> {
        return (
            <>
                <Infoblock {...this.props}
                           isOwner={!this.props.match.params.userId}
                           profile={this.props.profile}
                           status={this.props.status || "-------"}
                           updateStatus={this.props.updateStatus}
                           savePhoto={this.props.savePhoto}
                />
            </>
        );
    }
}
const mapStateToProps =(state: AppStateType): MapStatePropsType => {
    return {
        posts: state.contentPage.posts,
        addNewPostText: state.contentPage.addNewPostText,
        profile: state.contentPage.profile,
        status: state.contentPage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};
//получить еще и данные о маршруте, т.е URL
//и далее эту новую компоненту передать в connect
//контейнерная компонента создается connect'ом
export default compose(
    connect(mapStateToProps, {addPost, getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(InfoblockContainer);