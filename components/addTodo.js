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
    }

    input {
        flex: 1;
        width:66px;
        height:15px;
        border: none;
        box-sizing: border-box;
        font-style: Lato;
        font-weight: 400;
        font-size: 11px;
        line-height: 15px;
        color:#BFBFBF;
        background-color: #424242;
    }

    input:focus {
        outline: none;
        width:66px;
        height:15px;
        font-style: Lato;
        font-weight: 400;
        font-size: 11px;
        line-height: 15px;
        white-space: nowrap;
        color:#BFBFBF;
        background-color: #5F5F5F;
    }
    .table-of-colors__container_for-add-button{
      margin-top: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      display:flex;
      flex-direction: column;
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
    }
    .table-of-colors__table_color {
      width: 90px;
      height:54px;
      color:#424242;
      background-color: #424242;
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
      margin-left: auto;
      margin-right:0px;
      width: 134px;
      height:54px;
      color:#424242;
      background-color: #424242;
      border:1px #333333;
    }
    .table-of-colors__table_cell-name {
      margin-top: 18px;
      margin-bottom: 21px;
      margin-left: 14px;
      margin-right: 4px;
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
      margin-right:auto;
      margin-left:0px;
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
  
  .table-of-colors__table_cell-change:hover {
      color: #53CBF1;
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
.table-of-colors__button-add {
  width:94px;
  height:15px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  font-family: Lato;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.4px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  white-space:pre-line;
}
.colorizer__menu_input-name {
  width: 175px;
  height:40px;
  margin-left:0px;
  margin-right:auto;
  margin-top:0px;
  margin-bottom:0px;
  border-radius: 4px;
  background-color: #5f5f5f;
  border:1px solid #BFBFBF;
}
.colorizer__menu_input-field {
  width: 120px;
  height:20px;
  margin-left:15px;
  margin-right:auto;
  margin-top: 9px;
  margin-bottom:11px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #BFBFBF;
  border: 0px;
  background-color: #5f5f5f;
}
</style>
<div class="table-of-colors__container_for-add-button">
  <div class="table-of-colors__table_line">
    <div class="table-of-colors__table_name">
        <h4 class="table-of-colors__table_cell-name" placeholder="Введите название"><input type="text"/></h4>
    </div>
    <div class="table-of-colors__table_other-cells">
      <select id="selectID" class="table-of-colors__table_cell-name">
        <option value="MAIN"><div class="colorizer__menu_input-field">main</div></option>
        <option value="BASE"><div class="colorizer__menu_input-field">Base</div></option>
      </select>
    </div>

  </div>
  <todo-button><div class="table-of-colors__button-add">Добавить цвет</div></todo-button>
</div>
  
  `;

  class AddTodo extends HTMLElement {
    static get observedAttributes() {
      return ['value','type'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this._input = this.shadowRoot.querySelector('input');
      this._button = this.shadowRoot.querySelector('todo-button');

      this._button.addEventListener('click', () =>
        this.dispatchEvent(new CustomEvent('addTodo'))
      );
    }

    get value() {
      return this._input.value;
    }

    set value(val) {
      this._input.value = val;
    }
  }

  customElements.define('add-todo', AddTodo);
})();
