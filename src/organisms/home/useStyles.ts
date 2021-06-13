import { makeStyles } from '@material-ui/styles';

export const useStyle = makeStyles({
  home: {
    width: '100vw',
    height: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
  },
  textDistinction: {
    color: '#00aeff',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
