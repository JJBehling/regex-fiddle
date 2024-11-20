document.addEventListener("DOMContentLoaded", () => {
    const regexInput = document.getElementById('regexInput');
    const sampleText = document.getElementById('sampleText');
    const outputDiv = document.getElementById('output');
    const errorDiv = document.getElementById('error');

    const updateMatches = () => {
        let regex, text;

        errorDiv.textContent = ''; // Clear previous errors

        try {
            // Get the user's regex input and create a new regex with the global flag
            regex = new RegExp(regexInput.value, 'g'); // 'g' flag is hardcoded
            text = sampleText.value;

            // Clear previous matches
            outputDiv.innerHTML = '';

            if (regexInput.value !== '') {
                // Match all occurrences and display them in a list
                const matches = [...text.matchAll(regex)];

                if (matches.length === 0) {
                    outputDiv.textContent = "No matches found.";
                    return;
                }

                // Create a list of matches
                const matchList = document.createElement('ul');

                // Loop through matches and append them to the list
                matches.forEach(match => {
                    const listItem = document.createElement('li');
                    listItem.textContent = match[0]; // Add the matched text
                    matchList.appendChild(listItem);
                });

                // Add the match list to the output div
                outputDiv.appendChild(matchList);
            } else {
                outputDiv.textContent = "Please enter a valid regex pattern.";
            }
        } catch (e) {
            // Display any errors in regex
            errorDiv.textContent = "Invalid regular expression!";
        }
    };

    // Add event listeners to update matches in real-time
    regexInput.addEventListener('input', updateMatches);
    sampleText.addEventListener('input', updateMatches);
});
