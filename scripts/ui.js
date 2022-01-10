// 1. Render chat templates to the DOM
// 2. Clear the list of chats (when the room changes)
class ChatUI {
	constructor(list) {
		this.list = list;
	}
	clear() {
		this.list.innerHTML = '';
	}
	render(data) {
		const when = dateFns.distanceInWordsToNow(
			data.created_at.toDate(),
			{ addSuffix: true }
		);
		const html = `
			<li class="list-group-item position-relative pt-4 mb-1">
				<span class="username">${data.username}</span>
				<span class="message">${data.message}</span>
				<div class="time">${when}</div>
			</li>
		`;
		
		this.list.innerHTML += html;
	}
}