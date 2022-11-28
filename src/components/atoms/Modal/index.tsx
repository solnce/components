import { css } from '@emotion/react';
import { useModalViewModel } from './hooks';

type Type = {
  className?: string;
  handleCloseClick?: () => void;
  handleOutsideClick?: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
};

export const ModalView: React.FC<Type> = ({
  className,
  handleCloseClick,
  handleOutsideClick,
  header,
  children,
}) => (
  <button type="button" css={background} onClick={handleOutsideClick}>
    <div className={className} css={container}>
      <div css={head}>
        {header}
        <button type="button" css={closeButton} onClick={handleCloseClick}>
          ✖️
        </button>
      </div>
      <div css={body}>{children}</div>
    </div>
  </button>
);

const background = css`
  background-color: rgba(0, 0, 0, 0.4);
  border: 0;
  outline: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: left;
`;

const container = css`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
`;

const head = css`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 8px 16px;
`;

const closeButton = css`
  flex: 0 0 36px;
  height: 36px;
  background-color: transparent;
  border: 0;
`;

const body = css`
  padding: 16px;
`;

export const Modal: React.FC<Type> = ({
  className,
  handleCloseClick: handleCloseClickProps,
  handleOutsideClick: handleOutsideClickProps,
  children,
  header,
}) => {
  const { isShowModal, handleModalClose } = useModalViewModel();

  const handleCloseClick = () => {
    if (handleCloseClickProps) {
      handleCloseClickProps();
    }
    handleModalClose();
  };

  const handleOutsideClick = () => {
    if (handleOutsideClickProps) {
      handleOutsideClickProps();
    }
    handleModalClose();
  };

  return isShowModal ? (
    <ModalView
      className={className}
      handleCloseClick={handleCloseClick}
      handleOutsideClick={handleOutsideClick}
      header={header}
    >
      {children}
    </ModalView>
  ) : null;
};
