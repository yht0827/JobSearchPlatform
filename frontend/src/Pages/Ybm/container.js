import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Toeic from "Store/modules/ybm";
import Ybm from "./presenter";

export default compose(
    connect(
        (state)=>({Toeic: state.ybm.Toeic,
                ToeicForm: state.ybm.ToeicForm,
                ToeicCount: state.ybm.ToeicCount,
                PageNum: state.ybm.PageNum,   
        }),
        (dispatch) => ({
            Toeics: bindActionCreators(Toeic,dispatch)
    })),
    withState("action", "changeAction", "search"),
    withState("search", "changeSearch", ""),
    withHandlers({
        ChangeAction: props => data => {
            props.changeSearch("");
            props.changeAction(data);
            props.Toeics.Clear(data);
        },
        ClickAction: props => () => {
            props.Toeics.getToeic(props.search,1);
            props.Toeics.GetPage(1);
                props.Toeics.GetCount(props.search);
        },
        GetToeics: props => event => {
                props.changeSearch(event.target.value);
        },
        KeyAction: props => event => {
            if(event.charCode === 13){
                props.Toeics.getToeic(props.search,1);
                props.Toeics.GetPage(1);
                props.Toeics.GetCount(props.search);
            }
        },
        handlePage: props => (e,{activePage}) => {
                props.Toeics.getToeic(props.search,activePage);  
                props.Toeics.GetPage(activePage);
        },
        SubmitToeic: props => () => {
            props.Toeics.RegiTo(props.ToeicForm);
    },
        handleChange: props => (event) => {
            const { name, value } = event.target;
            props.Toeics.TOEICRegi({name,value});
        },
    }),
)(Ybm);
