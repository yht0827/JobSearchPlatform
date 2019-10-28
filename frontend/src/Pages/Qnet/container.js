import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Gisa from "Store/modules/qnet";
import Qnet from "./presenter";

export default compose(
    connect(
        (state)=>({Toeic: state.qnet.Gisa,
                GisaForm: state.qnet.GisaForm, 
                GisaCount: state.qnet.GisaCount,
                PageNum: state.qnet.PageNum,           
        }),
        (dispatch) => ({
            Gisas: bindActionCreators(Gisa,dispatch)
    })),
    withState("action", "changeAction", "search"),
    withState("type","changetype","QNET"),
    withState("search", "changeSearch", ""),
    withHandlers({
        ChangeAction: props => data => {
            props.changeSearch("");
            props.changeAction(data);
            props.Gisas.Clear(data);
        },
        ClickAction: props => () => {
                props.Gisas.GetPage(1);
                props.Gisas.getGisa(props.search,1);
                props.Gisas.GetCount(props.search);
        },
        GetGisas: props => event => {
                props.changeSearch(event.target.value);
        },
        KeyAction: props => event => {
            if(event.charCode === 13){
                props.Gisas.GetPage(1);
                props.Gisas.getGisa(props.search,1);
                props.Gisas.GetCount(props.search);
            }
        },
        handlePage: props => (e,{activePage}) => {
                props.Gisas.getGisa(props.search,activePage);  
                props.Gisas.GetPage(activePage);
        },
        SubmitGisa: props => () => {
                props.Gisas.RegiGisa(props.GisaForm);
        },
        handleChange: props => (event) => {
            const { name, value } = event.target;
            props.Gisas.GISARegi({name,value});
    },
    }),
)(Qnet);
