import { compose, withState, withHandlers, lifecycle } from "recompose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as auth from "Store/modules/auth";
import Platform from "./presenter";

export default compose(
    connect((state) => ({ visible: state.auth.visible, isLogged: state.auth.isLogged }),
    dispatch => ({ Auths: bindActionCreators(auth,dispatch) })        
    ),
    withState("action", "ChangeAction", "main"),
    lifecycle({
        componentDidMount() {
            const id = localStorage.getItem("id");
            if(id){
                this.props.Auths.SetLog(id);
            }
        },
    }),
    withHandlers({
        LogOutAction: props => () => {
            props.Auths.Logout();
        },
        ChangeState: props => () => {
            props.ChangeAction("main");
            props.Auths.ClearProfile();
        },
    }),
)(Platform);
