import { makeStyles } from '@material-ui/styles';

export const useStyledPosts = makeStyles({
  postsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18vw',
    margin: '0 auto'
  }
});

export const useStyledPost = makeStyles({
  postWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '18vw',
    height: '25vh',
    padding: '2vw',
    backgroundColor: '#fff',
    borderRadius: '8px'
  }
});