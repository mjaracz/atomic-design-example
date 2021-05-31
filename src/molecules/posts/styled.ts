import { makeStyles } from '@material-ui/styles';

export const useStyledPosts = makeStyles({
  postsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60vw',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  circleLoading: {
    margin: '50px 0'
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
    margin: '2vw',
    padding: '2vw'
  },
  textTitle: {
    textAlign: 'left',
    width: '50vw',
    color: '#b000ff',
    margin: '6px 0'
  },
  textDescription: {
    margin: '10px 0',
    textAlign: 'left',
    width: '50vw',
    color: '#000'
  },
});