let employees = [];

function addEmployee() {
    const employeeName = document.getElementById("employeeName").value;
    const daysWorked = parseInt(document.getElementById("daysWorked").value);
    const dailyRate = parseFloat(document.getElementById("dailyRate").value);
    const deductionAmount = parseFloat(document.getElementById("deductionAmount").value);

    if (!employeeName || daysWorked <= 0 || dailyRate <= 0 || deductionAmount < 0) {
        alert("Please fill all fields correctly.");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    employees.push({
        employeeName,
        daysWorked,
        dailyRate,
        grossPay,
        deductionAmount,
        netPay
    });

    updateTable();
    clearInputs();
}

function deleteEmployee() {
    const lineNumber = parseInt(document.getElementById("lineNumber").value);

    if (lineNumber <= 0 || lineNumber > employees.length) {
        alert("Invalid line number.");
        return;
    }

    employees.splice(lineNumber - 1, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById("payrollTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    employees.forEach((employee, index) => {
        const row = tableBody.insertRow();

        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = employee.employeeName;
        row.insertCell(2).innerText = employee.daysWorked;
        row.insertCell(3).innerText = employee.dailyRate.toFixed(2);
        row.insertCell(4).innerText = employee.grossPay.toFixed(2);
        row.insertCell(5).innerText = employee.deductionAmount.toFixed(2);
        row.insertCell(6).innerText = employee.netPay.toFixed(2);
    });
}

function clearInputs() {
    document.getElementById("employeeName").value = "";
    document.getElementById("daysWorked").value = "";
    document.getElementById("dailyRate").value = "";
    document.getElementById("deductionAmount").value = "";
}
