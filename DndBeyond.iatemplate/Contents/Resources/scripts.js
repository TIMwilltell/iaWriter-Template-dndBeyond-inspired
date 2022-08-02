// var element = document.createElement("epigraph-block-signed");

// let test = document.createElement("text-block");

// let purple = document.createElement("purple-text");
//     purple.innerHTML = "Purple Text";
//     document.appendChild(purple);

class EpigraphBlockSigned extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define("epigraph-block-signed", EpigraphBlockSigned);