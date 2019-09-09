import { compose, lifecycle, withState } from "recompose";
import Auth from "./presenter";

export default compose(
    withState("action", "changeAction", "login"),
    lifecycle({
        componentDidMount() {
            this.props.AuthActions.setHeaderVisibility(false);
        },
        componentWillUnmount() {
            this.props.AuthActions.setHeaderVisibility(true);
        },
    }),
)(Auth);
