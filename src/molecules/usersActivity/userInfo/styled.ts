import { makeStyles } from '@material-ui/styles';

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 550,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
  },
  textDistinction: {
    color: '#bc36ff',
  },
});
