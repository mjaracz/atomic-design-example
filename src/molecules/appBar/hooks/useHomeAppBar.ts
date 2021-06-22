import { MouseEvent, useState } from 'react';

export const useHomeAppBar = () => {
  const [anchorProfile, setAnchorProfile] = useState<null | HTMLElement>(null);
  const [anchorPages, setAnchorPages] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isProfileMenuOpen = Boolean(anchorProfile);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isPagesMenuOpen = Boolean(anchorPages);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorProfile(event.currentTarget);
  };

  const handlePagesMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorPages(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handlePagesMenuClose = () => {
    setAnchorPages(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuClose = () => {
    setAnchorProfile(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return {
    anchorProfile,
    anchorPages,
    mobileMoreAnchorEl,
    isProfileMenuOpen,
    isPagesMenuOpen,
    isMobileMenuOpen,
    handleProfileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuClose,
    handleMobileMenuOpen,
    handlePagesMenuOpen,
    handlePagesMenuClose,
  };
};
