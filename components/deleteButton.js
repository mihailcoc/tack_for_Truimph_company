(function() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      button {
        width: 115px;
        height:54px;
        color:#424242;
        background-color: #424242;
        border-right:1px solid #333333;
      }
      .table-of-colors__table_cell-delete {
        width:20px;
        height:20px;
        color:#8d8d8d;
        margin-top:18px;
        margin-bottom:16px;
        margin-left: auto;
        margin-right: auto;
    }
    .table-of-colors__table_cell-delete:hover {
        color: #CA4C4C;
    }
    </style>
      <button><div class="table-of-colors__table_cell-delete">&#128465</button>
      `;
  
    class DeleteButton extends HTMLElement {
      constructor() {
        super();
  
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
  
    customElements.define('delete-button', DeleteButton);
  })();
  