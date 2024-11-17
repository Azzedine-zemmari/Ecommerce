window.customAlert = function(message, onConfirm = null) {
    const alertBox = document.createElement('div');
    alertBox.classList.add(
        'fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-gray-800', 'bg-opacity-50',
        'z-50'
    );

    const alertContent = document.createElement('div');
    alertContent.classList.add(
        'bg-white', 'text-gray-800', 'p-6', 'rounded-lg','w-72','md:w-full', 'shadow-lg', 'w-full', 'max-w-md', 
        'text-center', 'space-y-4'
    );

    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageText.classList.add('text-lg', 'font-semibold');
    alertContent.appendChild(messageText);

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('bg-green-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-green-600', 'focus:outline-none', 'text-sm');
    confirmButton.textContent = 'confirm';
    confirmButton.onclick = () => {
        alertBox.remove();
        if (typeof onConfirm === 'function') onConfirm();
    };

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('flex', 'justify-center', 'space-x-4');
    buttonsContainer.appendChild(confirmButton);
    alertContent.appendChild(buttonsContainer);

    alertBox.appendChild(alertContent);
    document.body.appendChild(alertBox);
};

document.querySelector("#submitbutton").addEventListener("click", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("Emailreq").value;
    const phone = document.getElementById("Number").value;
    const textarea = document.getElementById("textarea").value;

    if (firstName === "" || lastName === "" || email === "" || phone === "" || textarea === "") {
        customAlert("Please fill in all required information!");
        return;
    }
    if (firstName.length < 3 || lastName.length < 3) {
        customAlert("First and last names must have at least 3 characters each!");
        return;
    }
    if (email.length < 14 || !email.includes("@") || !email.endsWith("gmail.com")) {
        customAlert("Please enter a valid email address!");
        return;
    }
    if (isNaN(phone) || phone.length < 10 || phone.length > 15) {
        customAlert("Phone number must be 10-15 digits long!");
        return;
    }
    if (textarea.length < 18) {
        customAlert("Your message is too short!");
        return;
    }
    
    customAlert("Form submitted successfully!", () => console.log("Form confirmed!"));
});

window.customConfirm = function(message, onConfirm = null, onCancel = null) {
    const confirmBox = document.createElement('div');
    confirmBox.classList.add(
        'fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-gray-800', 'bg-opacity-50',
        'z-50'
    );

    const confirmContent = document.createElement('div');
    confirmContent.classList.add(
        'bg-white', 'text-gray-800', 'p-6','w-72','md:w-full', 'rounded-lg', 'shadow-lg', 'w-full', 'max-w-md', 
        'text-center', 'space-y-4'
    );
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageText.classList.add('text-lg', 'font-semibold');
    confirmContent.appendChild(messageText);

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('bg-green-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-green-600', 'focus:outline-none', 'text-sm');
    confirmButton.textContent = 'confirm';
    confirmButton.onclick = () => {
        confirmBox.remove();
        if (typeof onConfirm === 'function') onConfirm();
    };

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-red-600', 'focus:outline-none', 'text-sm');
    cancelButton.textContent = 'cancel';
    cancelButton.onclick = () => {
        confirmBox.remove();
        if (typeof onCancel === 'function') onCancel();
    };

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('flex', 'justify-center', 'space-x-4');
    buttonsContainer.appendChild(confirmButton);
    buttonsContainer.appendChild(cancelButton);
    confirmContent.appendChild(buttonsContainer);

    confirmBox.appendChild(confirmContent);
    document.body.appendChild(confirmBox);
};

document.getElementById("canelbutton").addEventListener("click", function(event) {
    event.preventDefault();
    customConfirm("Are you sure you want to cancel?", 
        () => {
            document.querySelector("form").reset();
            console.log("Form reset and operation confirmed");
        }, 
        () => console.log("Cancel operation canceled")
    );
} );
