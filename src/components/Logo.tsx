import type { FC } from 'react';
import type { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

interface LogoProps {
  sx?: SxProps<Theme>;
}

const Logo: FC<LogoProps> = (props) => (
  <img
    alt="Logo"
    src="/static/logo.png"
    width="20%"
    {...props}
  />
);

export default Logo;
