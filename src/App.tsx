import React from 'react';
import { Aside } from './components/aside/Aside';
import './App.scss';
import { Layout } from './components/Layout';

const App: React.FC = function() {
  return (
	<div className='app-container text-body'>
		<div className='app-aside'>
			<Aside></Aside>
		</div>
		<div className='app-content'>
			<Layout></Layout>
		</div>
	</div>
  );
}

export default App;
