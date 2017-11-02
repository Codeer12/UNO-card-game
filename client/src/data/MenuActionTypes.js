/*
	Menu scenes ActionTypes
*/
const MenuActionTypes = {
	ROOMS_LIST_LOAD_ALL_START: 'ROOMS_LIST_LOAD_ALL_START',
	ROOMS_LIST_LOAD_ALL_COMPLETE: 'ROOMS_LIST_LOAD_ALL_COMPLETE',
	ROOMS_LIST_ADD: 'ROOMS_LIST_ADD',
	ROOMS_LIST_DELETE: 'ROOMS_LIST_DELETE',

	ROOM_INFO_MODAL_OPEN: 'ROOM_INFO_MODAL_OPEN',
	ROOM_INFO_MODAL_CLOSE: 'ROOM_INFO_MODAL_CLOSE',
	ROOM_INFO_MODAL_LOAD_DATA_START: 'ROOM_INFO_MODAL_LOAD_DATA_START',
	ROOM_INFO_MODAL_LOAD_DATA_COMPLETE: 'ROOM_INFO_MODAL_LOAD_DATA_COMPLETE',
	ROOM_INFO_MODAL_JOIN_ROOM_FAIL: 'ROOM_INFO_MODAL_JOIN_ROOM_FAIL',
	ROOM_INFO_MODAL_JOIN_ROOM_SUCCESSFUL: 'ROOM_INFO_MODAL_JOIN_ROOM_SUCCESSFUL',
	

	ROOM_CREATE_MODAL_OPEN: 'ROOM_CREATE_MODAL_OPEN',
	ROOM_CREATE_MODAL_CLOSE: 'ROOM_CREATE_MODAL_CLOSE',

	ROOM_CREATE_MODAL_CREATE_START: 'ROOM_CREATE_MODAL_START',
	ROOM_CREATE_MODAL_CREATE_COMPLETE: 'ROOM_CREATE_MODAL_COMPLETE',

	HALL_RECEIVE_NEW_MESSAGE: 'HALL_RECEIVE_NEW_MESSAGE',
	HALL_NEW_MEMBER: 'HALL_NEW_MEMBER',
	HALL_LOAD_DATA_SUCCESSFUL: 'HALL_LOAD_DATA_SUCCESSFUL',
	HALL_LOAD_DATA_FAIL: 'HALL_LOAD_DATA_FAIL' 
};

export default MenuActionTypes;