function main() {

  const bill = document.getElementById('bill');
  const service = document.getElementById('service');
  const people = document.getElementById('people');

  const calculateBtn = document.getElementById('calculate');
  
  const alert = document.getElementById('alert');
  const close = document.getElementById('close');

  const amount = document.getElementById('amount');
  const each = document.getElementById('for-each');


  function calculateTip(e) {

    e.preventDefault();

    if (bill.value == '' || service.value == '' || people.value == '') {
      alert.style.display = 'block';
      close.addEventListener('click', () => alert.style.display = 'none');
    
    } else {
      amount.textContent = `$ ${(service.value * bill.value / people.value).toFixed(2)}`;
      each.textContent = 'each';
      each.style.display = 'block';

      if (people.value == 1) {
        each.style.display = 'none';
      }
    }
  }
  
  calculateBtn.addEventListener('click', calculateTip)
}

main();