import React from 'react';
import MaterialTable from 'material-table';
import { data } from '../data.js';

export default function MyTable() {
  return (
    <div className="my-table">
      <MaterialTable
        data={data}
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'IP Address', field: 'ip_address' },
        ]}
        title="Fake Data"
        icons={{
          FirstPage: () => '<<',
          PreviousPage: () => '<',
          NextPage: () => '>',
          LastPage: () => '>>',
          Search: () => '',
          ResetSearch: () => '',
        }}
        options={{
          headerStyle: {
            background: 'black',
            color: 'white',
          },
          pageSizeOptions: [5, 10, 25, 50],
          rowStyle: {
            color: 'blue',
          },
        }}
      />
    </div>
  );
}
