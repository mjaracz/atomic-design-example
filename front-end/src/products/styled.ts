import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflowY: 'auto',
    marginTop: 120,
    '& .MuiList-dense': {
      marginTop: 80,
      paddingButton: '0 !important'
    },
  },
  item: {
    backgroundColor: '#f6f6f6',
    margin: 20,
    borderRadius: 15,
    width: 350,
  },
  itemText: {
    '& .MuiListItemText-secondary': {
      color: '#f5005780',
    },
  },
  itemDescText: {
    margin: 8,
  },
  itemDeleteAction: {
    right: 40,
  },
})
