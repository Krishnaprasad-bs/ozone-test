import * as React from "react";
import { List , Datagrid, ArrayField  } from 'react-admin';
import TextField from '@mui/material/TextField';
import { useRecordContext } from 'react-admin';
import moment from 'moment';

const getComponent = (record, source) => {
  switch(record.name) {
    case 'email':
      return (<a href={record[source]}>{record[source]}</a>);
    case 'expiry':
      const startTime = moment(parseInt(record[source]));
      const now = moment(new Date());
      const diff = now.diff(startTime);
      const duration = moment.duration(diff);
      return (<div>{`${duration.days()} Days ${duration.hours()} Hours ${duration.minutes()} Mins ${duration.seconds()} Secs`}</div>);
    case 'accont_name':
      return (<div>{record[source]}</div>);
    default:
      return (<div>{record[source]}</div>);
  }
}
const CustomField = ({ source }) => {
  const record = useRecordContext();
  return record ? (getComponent(record, source)) : null;
}

const MuiTextField = ({ source }) => {
  const record = useRecordContext();
  return record ? <TextField value={record[source]} /> : null;
} 
const CustomList = props => (
    <List {...props}>
      <ArrayField>
        <Datagrid>
            <MuiTextField source="name" />
            <CustomField source="value" />
        </Datagrid>
      </ArrayField>
    </List >
);

export default CustomList;