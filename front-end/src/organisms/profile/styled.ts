import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  profile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBackButton: {
    margin: 20,
  },
  profileText: {
    padding: 23,
    fontSize: 23,
    color: '#fff',
  },
  uploadForm: {
    width: 0.1,
    height: 0.1,
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
    transition: '.4s',
    '& + input': {
      display: 'inline-block',
      fontSize: 1.25,
      fontWeight: 700,
      color: '#fff',
      backgroundColor: '#000',
    },
    '& + label': {
      color: '#f1e5e6',
      cursor: 'pointer',
    },
    '& + label svg': {
      width: '1em',
      height: '1em',
      verticalAlign: 'middle',
      fill: '#bc36ff',
      marginTop: '-0.25em',
      marginRight: '0.25em',
    },
    '&:focus + label svg, & + label:hover': {
      fill: '#2962ff',
    },
  },
  uploadContainer: {
    padding: 24,
  },
})
