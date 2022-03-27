import type { FC, ReactNode } from 'react';
import NoDataRecord from './NoDataRecord';
import {
  Box,
  CircularProgress,
} from '@mui/material';

interface LoaderProps {
  isLoading?: boolean;
  hasData?: any;
  children?: ReactNode;
}

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { isLoading, hasData, children } = props;
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          mt: 10,
          mb: 10,
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <CircularProgress />
      </Box>);
  }

  if (!isLoading && !(hasData.length > 0)) { return (<NoDataRecord message="No existen datos que mostrar" />); }

  return (<>{children}</>);
};

export default Loader;
