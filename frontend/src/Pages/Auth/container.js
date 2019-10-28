import { connect } from "react-redux";
import { compose, lifecycle, withState, withHandlers } from "recompose";
import { bindActionCreators } from "redux";
import * as auth from "Store/modules/auth";
import Notification from "Components/common/Notification";
import Auth from "./presenter";

export default compose(
    connect(
        (state)=>({ Joinform: state.auth.Joinform,
                Loginform: state.auth.Loginform,
        }),
        dispatch => ({
            Auths: bindActionCreators(auth,dispatch)
    })),
    withState("action", "changeAction", "login"),
    lifecycle({
        componentDidMount() {
            this.props.Auths.changeHeader(false);
        },
        componentWillUnmount() {
            this.props.Auths.changeHeader(true);
            this.props.Auths.Clear();
        },
    }),
    withHandlers({
        ChangeAction: props => data => {
            props.changeAction(data);
            props.Auths.Clear();
        },
        handleChange: props => (event) => {
            const { name, value } = event.target;
            props.Auths.UserRegi({name,value});
        },
        loginhandleChange: props => (event) => {
            const { name, value } = event.target;

            props.Auths.UserLog({name,value});
        },
        SubmitUser : props => () => {
                const {password,password2} = props.Joinform;
                console.log(password,password2);
                if(password === password2){
                    props.Auths.RegiUser(props.Joinform,props.changeAction);
                }else{
                    Notification("error", "패스워드가 일치하지 않습니다.");
                }
        },
        LoginUser : props => () => {
             props.Auths.LogUser(props.Loginform,props.history);
        },
    }),
)(Auth);
