import { compose, withState } from "recompose";
import Qnet from "./presenter";

export default compose(
    withState("action", "changeAction", "search"),
)(Qnet);
