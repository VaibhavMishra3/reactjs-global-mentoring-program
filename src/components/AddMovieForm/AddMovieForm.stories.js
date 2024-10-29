import AddMovieForm from './AddMovieForm';

export default {
  component: AddMovieForm
};

export const Default = {
  args: {
    handleClose: (event) => console.log('dialog closed'),
    handleSubmit: (event) => console.log('movie added: ' + JSON.stringify(event))
  },
  parameters: {
  }
};
