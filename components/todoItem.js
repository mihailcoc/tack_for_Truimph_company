(function() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
  :host {
      display: flex;
      color: #333;
      align-items: center;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      color:#424242;
      border:#333333;
      display: flex;
      flex-direction:row;
      border-bottom:1px solid #333333;
  }
  .table-of-colors__table_line {
    width:679px;
    height:54px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    color:#424242;
    border:#333333;
    display: flex;
    flex-direction:row;
    border-bottom:1px solid #333333;
  }
  .table-of-colors__table_color {
    width: 90px;
    height:54px;
    color:#424242;
    background-color: #424242;
    border-right:1px solid #333333;
  }    
  .table-of-colors__table_cell-color {
    margin-left: auto;
    margin-right: auto;
    margin-top:6px;
    margin-bottom:7px;
    height:41px;
    width:41px;
    align-self: center;
    background-color: #86EAE9;
  }
  .table-of-colors__table_name {
    width: 134px;
    height:54px;
    color:#424242;
    background-color: #424242;
    border:1px #333333;
    border-right:1px solid #333333;
  }
  .table-of-colors__table_cell-name {
    margin-top: 18px;
    margin-bottom: 21px;
    margin-left: 14px;
    width:66px;
    height:15px;
    font-style: Lato;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    white-space: nowrap;
    color:#BFBFBF;
  }
  .table-of-colors__table_other-cells {
    width: 115px;
    height:54px;
    color:#424242;
    background-color: #424242;
    border-right:1px solid #333333;
  }
  .table-of-colors__table_cell-type {
    margin-left: 15px;
    margin-top: 18px;
    margin-bottom: 21px;
    width:23px;
    height:15px;
    font-style: Lato;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    white-space: nowrap;
    color:#BFBFBF;
  }
  .table-of-colors__table_cell-code {
    margin-left: 15px;
    margin-top: 18px;
    margin-bottom: 21px;
    width:46px;
    height:15px;
    font-style: Lato;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    white-space: nowrap;
    color:#BFBFBF;
  }
  .table-of-colors__table_cell-change {
    width:20px;
    height:20px;
    color:#8d8d8d;
    margin-top:18px;
    margin-bottom:16px;
    margin-left: auto;
    margin-right: auto;
}
  </style>

    <div class="table-of-colors__table_line">
      <div class="table-of-colors__table_color">
          <div class="table-of-colors__table_cell-color"></div>
        </div>
        <div class="table-of-colors__table_name">
            <h4 class="table-of-colors__table_cell-name">
              <div class="name">
                <slot></slot>
              </div>
            </h4>
        </div>
        <div class="table-of-colors__table_other-cells">
            <h4 class="table-of-colors__table_cell-type">
              <div class="type">
                <slot></slot>
              </div>
            </h4>
        </div>
        <div class="table-of-colors__table_other-cells">
            <div class="table-of-colors__table_cell-code"></div>
        </div>
        <div class="table-of-colors__table_other-cells">
            <div class="table-of-colors__table_cell-change">&#128393</div>
        </div>
      <delete-button></delete-button>
    </div>

  `;

  class TodoItem extends HTMLElement {

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this._name = this.shadowRoot.querySelector('.name');
      this._name = this.shadowRoot.querySelector('.type');
      this._button = this.shadowRoot.querySelector('delete-button');

      this._addButtonClickEvent();
    }

    _addButtonClickEvent() {
      this._button.addEventListener('click', ev =>
        this.dispatchEvent(new CustomEvent('deleteTodo', { bubbles: true }))
      );
    }

  }

  customElements.define('todo-item', TodoItem);
})();
