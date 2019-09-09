import { compose, withState } from "recompose";
import Ybm from "./presenter";

export default compose(
    withState("action", "changeAction", "search"),
)(Ybm);
