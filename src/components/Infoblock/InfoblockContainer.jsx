import React from 'react';
import {addPost, updateNewPost, getProfile} from '../../Redux/contentPage-reducer';
import {connect} from "react-redux";
import Infoblock from "./Infoblock";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        let userId = this.props.match.params.userId;
        if(!userId) {
            return userId = 2;
        }
        this.props.getProfile(userId);
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
//контейнерная компонента создается connect'ом
export default compose(
    connect(mapStateToProps, {addPost, updateNewPost, getProfile}),
    withRouter,
    withAuthRedirect
)(InfoblockContainer);