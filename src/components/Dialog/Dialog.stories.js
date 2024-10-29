import Dialog from './Dialog';

export default {
  component: Dialog
};

export const Default = {
  args: {
    title: 'Title',
    children: 'children',
    handleClose: (event) => console.log('dialog closed')
  },
  parameters: {
  }
};
