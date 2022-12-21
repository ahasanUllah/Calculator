(function () {
   const numberButton = document.querySelectorAll('[data-number]');
   const operationButton = document.querySelectorAll('[data-operation]');
   const equalsButton = document.querySelector('[data-equals]');
   const deleteButton = document.querySelector('[data-delete]');
   const allClearButton = document.querySelector('[data-all-clear]');
   const previousOperandTextElement = document.querySelector('[data-previous-operand]');
   const currentOperandTextElement = document.querySelector('[data-current-operand]');

   numberButton.forEach((button) => {
      button.addEventListener('click', (e) => {
         let value = e.target.innerText;
         previousOperandTextElement.innerText += value;
      });
   });
})();
