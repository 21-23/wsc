export default {
    isMaster(socket) {
        return !socket;
    },

    notifyMasters(action) {
        return action;
    },
};
