import { ModalView } from '@atoms/Modal';

export default {
  title: 'Atoms/Modal',
  component: ModalView,
};

export const Basic = () => (
  <ModalView header="header" handleCloseClick={() => alert('handleCloseClick')}>
    body
  </ModalView>
);
