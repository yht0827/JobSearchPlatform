import { withStateHandlers } from "recompose";

const WithLoader = withStateHandlers({
    isLoaded: true,
},
{   
    handleLoader: () => value => ({ isLoaded: value }),
});

export default WithLoader;
