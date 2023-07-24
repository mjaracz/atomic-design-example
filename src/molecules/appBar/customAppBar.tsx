import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { ButtonHome } from 'atoms/buttons';
import { useCustomAppBar } from 'molecules/appBar/hooks/useCustomAppBar';
import { useStyle } from './useStyles';

export function CustomAppBar() {
  const styles = useStyle();
  const {
    anchorProfile,
    anchorPages,
    isProfileMenuOpen,
    isPagesMenuOpen,
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleProfileMenuClose,
    handlePagesMenuClose,
    handleMobileMenuClose,
    handleMobileMenuOpen,
    handleProfileMenuOpen,
    handlePagesMenuOpen,
  } = useCustomAppBar();

  const menuId = 'primary-search-account-menu';
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorProfile}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      onClose={handleProfileMenuClose}
      open={isProfileMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={handleProfileMenuClose}>
        <ButtonHome label="sign in" path="/sign-in" />
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <ButtonHome label="sign up" path="/sign-up" />
      </MenuItem>
    </Menu>
  );

  const renderPagesMenu = (
    <Menu
      anchorEl={anchorPages}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      onClose={handlePagesMenuClose}
      open={isPagesMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem component={Link} to='/'>
        Home Page
      </MenuItem>
      <MenuItem component={Link} to='/entites'>
        Entities Page
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={styles.grow}>
      <AppBar className={styles.header} position="static">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            className={styles.menuButton}
            color="inherit"
            edge="start"
            onClick={handlePagesMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            aria-label="open drawer"
            className={styles.menuButton}
            color="inherit"
            component={Link}
            edge="start"
            to="/"
          >
            <Home />
          </IconButton>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              placeholder="Search Legalcluster"
            />
          </div>
          <div className={styles.grow} />
          <div className={styles.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              edge="end"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={styles.sectionMobile}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderProfileMenu}
      {renderPagesMenu}
    </div>
  );
}
