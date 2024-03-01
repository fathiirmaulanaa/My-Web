// clear form before unload
window.onBeforeUnload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

function myFunction() {
  alert(fathir - web.vercel.app);
}
