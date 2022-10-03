import { useState } from 'react';

export const useModalViewModel = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setIsShowModal(false);
  };

  return {
    isShowModal,
    handleModalClose,
  };
};
