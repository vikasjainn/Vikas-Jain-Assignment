const form = document.getElementById('myForm');
    const output = document.getElementById('output');
    let entries = []; // Initialize array to store entries
  
    // Function to display entries in table
    function displayEntries() {
      let tableHTML = `
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
      `;
      entries.forEach((entry, index) => {
        tableHTML += `
          <tr>
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.date}</td>
            <td>${entry.gender}</td>
            <td>
              <button onclick="editEntry(${index})">Edit</button>
            </td>
          </tr>
        `;
      });
      tableHTML += `</table>`;
      output.innerHTML = tableHTML;
    }
  
    // Function to add new entry
    function addEntry(name, email, date, gender) {
      const entry = {
        name,
        email,
        date,
        gender
      };
      entries.push(entry);
      displayEntries();
    }
  
    // Function to edit entry
    function editEntry(index) {
      const entry = entries[index];
      const newName = prompt("Enter new name", entry.name);
      const newEmail = prompt("Enter new email", entry.email);
      const newDate = prompt("Enter new date", entry.date);
      const newGender = prompt("Enter new gender", entry.gender);
      entries[index] = {
        name: newName,
        email: newEmail,
        date: newDate,
        gender: newGender
      };
      displayEntries();
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const date = form.elements['date'].value;
      const gender = form.elements['gender'].value;
  
      addEntry(name, email, date, gender);
  
      // Clear the form after submit
      form.reset();
    });
  