const tableSort = (n) => {
  let table = document.getElementById('table');
  let rows = table.rows;
  let switching = true;

  function switchRows() {
    while (switching) {
      // Ставимо одразу на false, бо спочатку таблиця не сортована
      switching = false;

      // Перебираємо всі строки, окрім останньої, бо останню строку не можна порівняти зі строкую i+1 (її не існує)
      for (let i = 1; i < rows.length - 1; i++) {
        let x = rows[i].getElementsByClassName('js-row-values')[n]; // n означає номер колонки
        let y = rows[i + 1].getElementsByClassName('js-row-values')[n];

        // Перевіряємо, чи варто переставити сусідні строки місцями
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          // Ставимо одразу на false, щоб можна було одним кліком пересортувати таблицю, бо інакше прийдеться клікати
          // по декілька раз до бажаного результату
          switching = true;
        }
      }
    }

    // Знову ставимо на true, щоб можна було ще раз сортувати
    switching = true;
  }

  const addEvent = (event) => {
    if (event.target === rows[0].getElementsByClassName('js-row-values')[n]) {
      console.log(rows[0].getElementsByClassName('js-row-values')[n]);
      switchRows();
    }
  };

  addEventListener('click', addEvent);
};
export default tableSort;
