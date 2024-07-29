import { Dialog } from "@headlessui/react";
import PropTypes from "prop-types";
import { IconButton } from "components/widgets/buttons";

import { CloseIcon } from "assets/icons";

import _styles from "./_styles.module.css";

function BaseDialog(props) {
  const { open, setOpen, action, children } = props;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <div className={_styles.root}>
        <Dialog.Panel className={_styles.container}>
          {action && (
            <div className={_styles.close_action}>
              <IconButton icon={CloseIcon} color="primary" onClick={handleClose} />
            </div>
          )}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

BaseDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  action: PropTypes.bool,
  children: PropTypes.node,
};

BaseDialog.defaultProps = {
  action: true,
};

export default BaseDialog;
