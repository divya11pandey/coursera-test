/*Hello speaker function*/
const helloSpeaker = {
	speakWord: 'Hello',	
};
//This function will say Hello
(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());