import {} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useHistory } from 'react-router-dom'
// Layout
import { useTheme } from '@material-ui/core/styles';
import TabPanel from './TabPanel'

const styles = {
  root: {
    textAlign: 'center',
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
  },
  box: {
  	//height: '300px',
  }
}

export default () => {
  return (
    <TabPanel />
  );
}
