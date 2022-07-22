(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
    button {
      width:220px;
      height:35px;
      margin-top:27px;
      margin-bottom:35px;
      margin-left: 230px;
      margin-right: 230px;
      border:1px solid #86EAE9;
      border-radius: 17px;
      background-color: #313131;
    }

    button:hover {
        box-shadow: none;
    }

    button:focus {
        outline: none;
    }
    </style>

    <button><slot></slot></button>
    `;

  class TodoButton extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define('todo-button', TodoButton);
})();
