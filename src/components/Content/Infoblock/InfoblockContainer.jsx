import React from 'react';
import {addPost, setUserProfile, updateNewPost} from '../../../Redux/contentPage-reducer';
import {connect} from "react-redux";
import * as axios from "axios";
import Infoblock from "./Infoblock";
import {withRouter} from "react-router-dom";

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
class InfoblockContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    render =()=> {
        return (
            <div>
                <Infoblock {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}
const mapStateToProps =(state)=> {
    return {
        mypostData: state.contentPage.mypostData,
        myNewPost: state.contentPage.myNewPost,
        profile: state.contentPage.profile
    }
};
//получить еще и данные о маршруте, т.е URL
//и далее эту новую компоненту передать в connect
let WithUrlDataContainerComponent = withRouter(InfoblockContainer);
//контейнерная компонента создается connect'ом
export default connect(mapStateToProps, {addPost, updateNewPost, setUserProfile})(WithUrlDataContainerComponent);