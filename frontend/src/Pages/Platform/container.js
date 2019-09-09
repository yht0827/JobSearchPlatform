import { compose, withState } from "recompose";
import { connect } from "react-redux";
import Platform from "./presenter";

export default compose(
    connect((state) => ({ visible: state.auth.getIn(["header", "visible"]) })),
    withState("isLogged", "changeLog", true),
    withState("action", "changeAction", "main"),
)(Platform);
