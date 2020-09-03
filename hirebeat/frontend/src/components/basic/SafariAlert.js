export default function safariAlert() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    alert("Incompatible Browsering mode.\nPlease try Chrome or Firefox on your Computer.");
  }
}
