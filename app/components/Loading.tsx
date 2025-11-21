import React from 'react';
import { Dialog, DialogContent, Box, Typography, LinearProgress } from '@mui/material';
import { CircularProgress } from '@mui/material';

interface LoadingProps {
  open: boolean;
  progress: number;
  message?: string;
}

/**
 * 加载弹窗组件，显示加载动画和进度条
 */
const Loading: React.FC<LoadingProps> = ({ open, progress, message = '正在加载...' }) => {
  return (
    <Dialog
      open={open}
      // disableBackdropClick={true}
      disableEscapeKeyDown={true}
      PaperProps={{
        style: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          maxWidth: '90%',
          width: 400,
          padding: 0
        }
      }}
    >
      <DialogContent sx={{ padding: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ mb: 3 }}>
            <CircularProgress size={60} color="primary" />
          </Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
            {message}
          </Typography>
          <Box sx={{ width: '100%', mt: 3 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{
                height: 10,
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5
                }
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Loading;