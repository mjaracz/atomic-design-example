import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    sideBar: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '20vw',
        padding: '4vw 2vw 4vw 4vw'
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
  })
);
