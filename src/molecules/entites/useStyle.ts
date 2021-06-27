import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
  listWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '20px',
    width: '70vw',
  },
  entitiesTitile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '65vw',
    fontSize: '34px',
    fontWeight: 600,
    backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  },
  cardWrapper: {
    width: 280,
    margin: 50,
  },
  cardMedia: {
    height: 140,
  },
});