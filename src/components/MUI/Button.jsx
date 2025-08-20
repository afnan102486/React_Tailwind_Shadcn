import { Button, IconButton } from "@mui/material";

export function MyButton({
  btnType, // mode selector for switch
  type,    // HTML button type (button, submit, reset)
  variant,
  color,
  size,
  disabled,
  startIcon,
  endIcon,
  loading,
  href,
  component,
  onClick,
  icon,
  groupButtons,
  orientation,
  disableElevation,
  accept,
  label,
  children,
  ...rest
}) {
  switch (btnType) {
    case "icon":
      return (
        <IconButton
          color={color}
          size={size}
          disabled={disabled}
          onClick={onClick}
          type={type}
          {...rest}
        >
          {icon}
        </IconButton>
      );

    default:
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
          type={type}
          component={component}
          {...rest}
        >
          {children || label}
        </Button>
      );
  }
}
