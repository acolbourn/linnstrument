import CssBaseline from '@mui/material/CssBaseline';
import Grid from './features/grid/Grid';
import PageLayout from './features/pageLayout/PageLayout';

function App() {
  return (
    <div
      className='App'
      style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
    >
      <CssBaseline />
      <PageLayout>
        <Grid />
      </PageLayout>
    </div>
  );
}

export default App;
