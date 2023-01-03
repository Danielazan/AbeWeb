import React from 'react';
import ThermalPrinter from 'thermalprinter';

function ThermalPrintButton() {
  const handleClick = () => {
    // Connect to the printer
    const printer = new ThermalPrinter({
      type: 'epson',
      interface: '/dev/usb/lp0'
    });

    // Prepare the content to be printed
    const printContent = 'This will be printed on thermal paper';

    // Send the raw printer commands to print the content
    printer.alignCenter();
    printer.println(printContent);
    printer.cut();
    printer.execute();
  };

  return (
    <button onClick={handleClick}>
      Print on Thermal Paper
    </button>
  );
}

export default ThermalPrintButton;
