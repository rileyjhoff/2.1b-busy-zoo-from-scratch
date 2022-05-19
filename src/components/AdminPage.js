import React from 'react';
import MyCharts from './MyCharts';
import MyTable from './MyTable';

export default function AdminPage() {
  return (
    <div className="App">
      <header>
        <a href="/">Home</a>
        <h2>Welcome to the Busy Admin Page</h2>
        <a href="/admin">Admin</a>
      </header>
      <main>
        <MyTable />
        <MyCharts />
      </main>
      <footer>
        <p>
          The Busy Admin is not responsible for any injuries resulting from looking at charts/tables
        </p>
      </footer>
    </div>
  );
}
