import { Dialog } from "@headlessui/react";
import PropTypes from "prop-types";
import { IconButton } from "components/widgets/buttons";

import { CloseIcon } from "assets/icons";

import _styles from "./_styles.module.css";

function CardDialog(props) {
  const { open, setOpen, title, children } = props;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <div className={_styles.root}>
        <Dialog.Panel className={_styles.container}>
          <div className={_styles.title_wraper}>
            <Dialog.Title className={_styles.title}>{title}</Dialog.Title>
            <IconButton icon={CloseIcon} color="primary" onClick={handleClose} />
          </div>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

CardDialog.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};

CardDialog.defaultProps = {
  title: "",
};

export default CardDialog;
