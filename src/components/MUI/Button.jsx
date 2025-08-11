import * as React from 'react';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { PhotoCamera } from '@mui/icons-material';


export function MyButton({
  type = "button", 
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  startIcon,
  endIcon,
  loading = false,
  href,
  component,
  onClick,
  icon, 
  groupButtons = [], 
  orientation = "horizontal",
  disableElevation = false,
  accept = "image/*", 
  label = "Button",
  children
}) {
  if (type === "icon") {
    return (
      <IconButton
        color={color}
        size={size}
        disabled={disabled}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    );
  }

  if (type === "upload") {
    return (
      <>
        <input
          accept={accept}
          style={{ display: 'none' }}
          id="upload-btn"
          type="file"
        />
        <label htmlFor="upload-btn">
          <Button
            variant={variant}
            color={color}
            size={size}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            component="span"
          >
            {children || label}
          </Button>
        </label>
      </>
    );
  }

  if (type === "group") {
    return (
      <ButtonGroup
        variant={variant}
        color={color}
        size={size}
        orientation={orientation}
        disableElevation={disableElevation}
      >
        {groupButtons.map((btn, i) => (
          <Button
            key={i}
            startIcon={btn.startIcon}
            endIcon={btn.endIcon}
            onClick={btn.onClick}
            disabled={btn.disabled}
            href={btn.href}
          >
            {btn.label}
          </Button>
        ))}
      </ButtonGroup>
    );
  }

  if (loading) {
    return (
      <LoadingButton
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        loading={loading}
        onClick={onClick}
        href={href}
      >
        {children || label}
      </LoadingButton>
    );
  }

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      href={href}
      component={component}
    >
      {children || label}
    </Button>
  );
}
