// DOM Queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

// Add a new chat
newChatForm.addEventListener('submit', e => {
	// Prevent default action (=refresh page)
	e.preventDefault();
	// Store message and pass into addChat method
	const message = newChatForm.message.value.trim();
	// Reset the form
	chatroom.addChat(message)
		.then(() => newChatForm.reset())
		.catch(error => console.log(error));
});

// Update username
newNameForm.addEventListener('submit', e => {
	// Prevent default action (=refresh page)
	e.preventDefault();
	// Store new name and pass into updateName method
	const newName = newNameForm.name.value.trim();
	chatroom.updateName(newName);
	// Reset the form
	newNameForm.reset();
	// Show, then hide the update message
	updateMssg.innerHTML = `
		<div>
			Your name was updated to ${newName}
		</div>
	`;
	setTimeout(() => updateMssg.innerHTML = '', 4000);
});

// Update the chat room
rooms.addEventListener('click', e => {
	if(e.target.tagName === 'BUTTON') {
		chatUI.clear();
		chatroom.updateRoom(e.target.getAttribute('id'));
		chatroom.getChats(chat => chatUI.render(chat));
	}
});

// Check local storeage for username
const username = localStorage.username ? localStorage.username : 'Anonymous';

// Class Instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// Get chats and render in the UI
chatroom.getChats(data => chatUI.render(data));