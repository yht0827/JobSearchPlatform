import { compose } from "recompose";
import { WithStepChange, WithLoader } from "Components/With";
import Company2 from "./presenter";

export default compose(
    WithStepChange,
    WithLoader,
)(Company2);
