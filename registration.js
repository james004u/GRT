<script>
    // Validate form before submission
    function validateForm() {
        var valid = true;
        var fields = [
            'firstName', 'middleName', 'lastName', 'streetAddress', 'zip', 'city', 'state', 'country', 'birthMonth', 'birthDay', 'birthYear', 'gender', 'ethnicity', 'employmentStatus', 'phoneNumber', 'emailAddress', 'fundingType', 'fundingAmount', 'moneyUsageDescription', 'moneyTiming', 'securityQuestion1', 'securityAnswer1', 'securityQuestion2', 'securityAnswer2', 'securityQuestion3', 'securityAnswer3', 'termsAgreement'
        ];

        // Check if all fields are filled
        fields.forEach(function(field) {
            var element = document.getElementById(field);
            if (element) {
                if (element.type === 'checkbox' && !element.checked) {
                    valid = false;
                    element.nextElementSibling.classList.add('text-red-500');
                } else if (element.value.trim() === '') {
                    valid = false;
                    element.classList.add('border-red-500');
                } else {
                    if (element.type === 'checkbox') {
                        element.nextElementSibling.classList.remove('text-red-500');
                    } else {
                        element.classList.remove('border-red-500');
                    }
                }
            }
        });

        // Redirect to next page if form is valid
        if (valid) {
            window.location.href = 'register.html'; // Replace with your actual next page URL
        }
    }

    // Handle country change event to show/hide additional fields
    function handleCountryChange() {
        var countrySelect = document.getElementById('country');
        var otherCountryDiv = document.getElementById('otherCountryDiv');
        var otherStateDiv = document.getElementById('otherStateDiv');

        if (countrySelect.value === 'other') {
            otherCountryDiv.classList.remove('hidden');
            otherStateDiv.classList.remove('hidden');
        } else {
            otherCountryDiv.classList.add('hidden');
            otherStateDiv.classList.add('hidden');
        }
    }
</script>
