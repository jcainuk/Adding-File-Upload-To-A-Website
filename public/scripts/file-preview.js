const filePickerElement = document.getElementById('image');
const imagePreviewElement = document.getElementById('image-preview');

const showPreview = () => {
  const { files } = filePickerElement;
  if (!files || files.length === 0) {
    return;
  }
  const pickedFile = files[0];
};

filePickerElement.addEventListener('change', showPreview);
