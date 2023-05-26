import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { parseAvatar } from '../../lib/parseAvatar';

interface PhotoUploaderProps {
  onFileSelect: (file: File | null) => void;
  userAvatar: Url
}

const UserAvatar: React.FC<PhotoUploaderProps> = ({ userAvatar, onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null | string>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };


  useEffect(() => {
    if (userAvatar) {
      setSelectedFile(parseAvatar(userAvatar))

    }
  }, [userAvatar])


  return (
    <Grid container spacing={2} alignItems="center">
      <Grid container>
        <Typography component={'label'}>Фото профілю</Typography>
      </Grid>
      <Grid item>
        {selectedFile && (
          <div>
            <img
              src={selectedFile instanceof File ? URL.createObjectURL(selectedFile) : selectedFile}
              alt="Selected File"
              style={{ maxWidth: '80px', marginTop: '10px' }}
            />
          </div>
        )}
      </Grid>
      <Grid item>
        <input
          accept="image/*"
          id="photo-upload-input"
          type="file"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <label htmlFor="photo-upload-input">
          <Button variant="outlined" component="span">
            Виберіть Файл
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default UserAvatar;