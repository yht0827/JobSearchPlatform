import React from "react";
import { withStateHandlers } from "recompose";
import { Icon } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import styled from "styled-components";

const StyledDatePicker = styled(DateInput)`
    display: inline-block !important;
    input {
        width: ${props => props.wid} !important;
    }
    i {
        color: ${props => props.icolor};
    }
`;

const WithDatePicker = withStateHandlers({
    date: "",
},
{
    dateChange: () => (event, { name, value }) => ({
        [name]: value,
    }),
})(
    ({ date, dateChange, icolor, wid }) => <StyledDatePicker
        icolor={icolor}
        name="date"
        dateFormat="YYYY-MM-DD"
        startMode="year"
        closable
        clearable
        wid={wid}
        clearIcon={<Icon name="remove" color="red" />}
        localization="ko"
        iconPosition="left"
        popupPosition="right center"
        animation="none"
        value={date}
        onChange={dateChange}
        preserveViewMode={false}
    />,
);

export default WithDatePicker;
