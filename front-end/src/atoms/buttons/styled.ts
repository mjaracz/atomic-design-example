import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  buttonForm: {
    margin: 30,
    '&:hover ': {
      transition: '.7s',
      color: '#ffffff',
      backgroundColor: '#2962ff',
    },
  },
  buttonHome: {
    margin: 22,
    backgroundColor: '#2962ff',
    '&:hover': {
      transition: '.7s',
      backgroundColor: '#3fabb5',
      color: '#2e3b40',
    },
  },
})
