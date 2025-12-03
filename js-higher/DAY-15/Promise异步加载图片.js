function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      resolve(image);
    };
    image.oneerror = reject();
    document.body.appendChild(image);
  });
}
loadImage("image.png").then((image) => {
  image.style.border = "solid 6px red";
});
