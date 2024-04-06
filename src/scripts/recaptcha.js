export default function onSubmit(token) {
  const form = document.getElementById('sample-form');
  if (form.reportValidity()) {
    form.submit();
  }
}
