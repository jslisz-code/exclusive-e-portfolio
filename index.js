// template_fn4ju5w
// service_2nzn82d
// 0MntK4mGe_GXhM3kA

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_2nzn82d",
      "template_fn4ju5w",
      event.target,
      "0MntK4mGe_GXhM3kA",
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly via email at jslisz.code@outlook.com",
      );
    });
}