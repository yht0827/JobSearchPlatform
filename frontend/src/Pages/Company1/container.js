import { compose } from "recompose";
import { WithStepChange, WithLoader } from "Components/With";

import Company1 from "./presenter";

export default compose(
    WithStepChange,
    WithLoader,
)(Company1);
