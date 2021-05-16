import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  productAddForm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingButton: 15,
    paddingTop: 40,
  },
  selectForm: {
    minWidth: 180,
    margin: 15,
  }
})