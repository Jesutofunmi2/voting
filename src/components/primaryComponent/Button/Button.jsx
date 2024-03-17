import "./Button.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  children,
  isLoading,
  loadingText,
  classNames,
  onClick,
  isDisabled,
  showSpinner = true,
  primarySpinner = true,
  ...rest
}) => {
  return (
    <motion.button
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
      data-testid="button"
      {...rest}
    >
      {isLoading ? (
        <span className="d-flex align-items-center">
          {showSpinner && (
            <FontAwesomeIcon
              icon={["fas", "spinner"]}
              className={`fa-spin ${
                primarySpinner ? "white--text" : "purple--text"
              } mr-2`}
              style={{ fontSize: "20px" }}
            />
          )}
          {loadingText}
        </span>
      ) : (
        <span className="d-flex align-items-center">{children}</span>
      )}
    </motion.button>
  );
};

export default Button;
