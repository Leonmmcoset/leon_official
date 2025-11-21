import React from 'react';
import { Box, LinearProgress, Typography, Dialog, DialogContent } from '@mui/material';

interface LoadingOverlayProps {
  open: boolean;
  progress: number; // 0 到 100 之间的值
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  open, 
  progress, 
  message = '正在加载...' 
}) => {
  return (
    <Dialog
      open={open}
      // 使用MUI标准弹窗样式
      PaperProps={{
        style: {
          backgroundColor: 'white',
          borderRadius: 4,
          minWidth: 300,
          maxWidth: '80vw',
          color: 'black',
        }
      }}
      // 禁止点击背景和ESC键关闭
      onClose={undefined}
    >
      <DialogContent sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          {message}
        </Typography>
        
        <Box sx={{ width: '100%', mb: 2 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            color="primary" // 使用MUI主题的primary颜色
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>
        
        <Typography variant="body2">
          {progress.toFixed(0)}%
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingOverlay;