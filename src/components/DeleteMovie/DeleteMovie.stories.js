import DeleteMovie from './DeleteMovie';

export default {
  component: DeleteMovie
};

export const Default = {
  args: {
    handleClose: (event) => console.log('dialog closed'),
    handleDelete: (event) => console.log('movie deleted')
  },
  parameters: {
  }
};
