import { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';
import useSettings from 'src/hooks/useSettings';

interface NoDataRecordProps {
  message?: string;
}

const NoDataRecord: FC<NoDataRecordProps> = (props: NoDataRecordProps) => {
  const { message } = props;
  const { settings } = useSettings();
  return (
    <Container
      maxWidth={settings.compact ? 'xl' : false}
    >
      <Box
        sx={{
          alignSelf: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          mt: 5,
          mb: 5,
          mx: 'auto',
        }}
      >
        <Typography
          textAlign={'center'}
          variant="h3"
          color="textPrimary"
        >
          {message}
        </Typography>
      </Box>
    </Container>
  );
};

NoDataRecord.prototype = {
  message: PropTypes.string,
};

NoDataRecord.defaultProps = {
  message: 'No existen registros',
};

export default NoDataRecord;
