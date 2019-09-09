import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "Store/modules/auth";
import container from "./container";

export default connect(
    null,
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
    }),
)(container);
