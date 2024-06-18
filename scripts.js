document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        
        try {
            await firebase.firestore().collection('contacts').add({
                name,
                email,
                message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            alert('Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    });
});
