const filePickerElement = document.getElementById('image');
const imagePreviewElement = document.getElementById('image-preview');

const showPreview = () => {
  const { files } = filePickerElement;
  if (!files || files.length === 0) {
    return;
  }
  const pickedFile = files[0];

  // Create a local URL that only works on user's computer
  imagePreviewElement.src = URL.createObjectURL(pickedFile);
};

filePickerElement.addEventListener('change', showPreview);
