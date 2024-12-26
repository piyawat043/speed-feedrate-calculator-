function updateInputs() {
    // Show or hide custom inputs based on dropdown selection
    const cuttingSpeed = document.getElementById('cuttingSpeed').value;
    const diameter = document.getElementById('diameter').value;
    const chipLoad = document.getElementById('chipLoad').value;

    document.getElementById('customCuttingSpeed').style.display = cuttingSpeed === 'custom' ? 'block' : 'none';
    document.getElementById('customDiameter').style.display = diameter === 'custom' ? 'block' : 'none';
    document.getElementById('customChipLoad').style.display = chipLoad === 'custom' ? 'block' : 'none';
}

function calculate() {
    // Get values from inputs
    const cuttingSpeed = document.getElementById('cuttingSpeed').value === 'custom'
        ? parseFloat(document.getElementById('customCuttingSpeed').value)
        : parseFloat(document.getElementById('cuttingSpeed').value);

    const diameter = document.getElementById('diameter').value === 'custom'
        ? parseFloat(document.getElementById('customDiameter').value)
        : parseFloat(document.getElementById('diameter').value);

    const numberOfFlutes = parseInt(document.getElementById('numberOfFlutes').value);
    const chipLoad = document.getElementById('chipLoad').value === 'custom'
        ? parseFloat(document.getElementById('customChipLoad').value)
        : parseFloat(document.getElementById('chipLoad').value);

    const scale = parseFloat(document.getElementById('scale').value);

    // Validate inputs
    if (!cuttingSpeed || !diameter || !numberOfFlutes || !chipLoad) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Calculate RPM and Feed Rate
    const rpm = Math.floor((cuttingSpeed * 1000) / (Math.PI * diameter));
    const feedRate = Math.floor(rpm * chipLoad * numberOfFlutes);

    // Scale RPM and Feed Rate
    const scaledRPM = Math.floor(rpm * scale);
    const scaledFeedRate = Math.floor(feedRate * scale);

    // Display results
    document.getElementById('rpmResult').textContent = `RPM: ${scaledRPM}`;
    document.getElementById('feedRateResult').textContent = `Feed Rate (mm/min): ${scaledFeedRate}`;
}
