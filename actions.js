import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(id, thumbup) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		thumbup
	}
}

function thumbDownComment(id, thumbdown) {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		thumbdown
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = (id, thumbup) => dispatch(thumbUpComment(id, thumbup));
const boundThumbDownComment = (id, thumbdown) => dispatch(thumbDownComment(id, thumbdown));
