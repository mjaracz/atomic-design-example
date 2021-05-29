import { makeStyles } from '@material-ui/styles';

export const useStyledPosts = makeStyles({
  postsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60vw',
    margin: '0 auto',
    flexWrap: 'wrap',
  }
});

export const useStyledPost = makeStyles({
  postWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '55vw',
    height: '20vh',
    backgroundColor: '#fff',
    borderRadius: '8px',
    margin: '2vw'
  },
  textWrapper: {
    textAlign: 'left',
    width: '50vw',
  }
});