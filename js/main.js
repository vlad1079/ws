let ws = new WebSocket('ws://gentle-fortress-53574.herokuapp.com/:3000');
ws.addEventListener('open' , ()=> {
  console.log('open');
})

function webS() {
  ws.send(JSON.stringify('server Hi'));
}

ws.addEventListener('message', (event) => {
	console.log(event.data);
})
