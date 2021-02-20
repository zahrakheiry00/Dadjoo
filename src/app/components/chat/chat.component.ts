import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  name:any;
  desc:any;
  texts: any = [];
  counterLabel = '30:00';
  counterTime = 1800;
  files = [
    { name: 'فایل 1' },
    { name: 'فایل 2' },
    { name: 'فایل 3' },
    { name: 'فایل 4' },
    { name: 'فایل 5' },
  ];
  message: any;

  SIGNALING_SERVER_URL = 'http://0.0.0.0:9999';
  TURN_SERVER_URL = 'localhost:3478';
  TURN_SERVER_USERNAME = 'username';
  TURN_SERVER_CREDENTIAL = 'credential';
  // WebRTC config: you don't have to change this for the example to work
  // If you are testing on localhost, you can just use PC_CONFIG = {}
  PC_CONFIG = {
    // iceServers: [
    //   {
    //     urls: 'turn:' + this.TURN_SERVER_URL + '?transport=tcp',
    //     username: this.TURN_SERVER_USERNAME,
    //     credential: this.TURN_SERVER_CREDENTIAL
    //   },
    //   {
    //     urls: 'turn:' + this.TURN_SERVER_URL + '?transport=udp',
    //     username: this.TURN_SERVER_USERNAME,
    //     credential: this.TURN_SERVER_CREDENTIAL
    //   }
    // ]
  };

  pc: any;
  localStream: any;
  remoteStreamElement: any = document.querySelector('#remoteStream');
  // socket:any;
  @ViewChild('remoteStream') remoteStream: any;

  constructor(private socket: Socket,private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
       this.name=params['name'];
       this.desc=params['desc'];
    })

    this.startCounter();

    //this.socket = io(this.SIGNALING_SERVER_URL, { autoConnect: false });
    this.getLocalStream();
    //this.socket.connect();

    this.socket.on('data', (data: any) => {
      if (data.video) {
        this.texts.push({ sender: false, text: data.text });
      } else {
        this.handleSignalingData(data);
      }
    });

    this.socket.on('ready', () => {
      console.log('Ready');
      // Connection with signaling server is ready, and so is local stream
      this.createPeerConnection();
      this.sendOffer();
    });
  }

  sendData(data: any) {
    this.socket.emit('data', data);
  }

  getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        console.log('Stream found');
        this.localStream = stream;

        // Connect after making sure that local stream is availble
        this.socket.connect();
      })
      .catch((error) => {
        console.error('Stream not found: ', error);
      });
  }

  createPeerConnection() {
    try {
      this.pc = new RTCPeerConnection(this.PC_CONFIG);
      this.pc.onicecandidate = this.onIceCandidate.bind(this);
      this.pc.onaddstream = this.onAddStream;
      this.pc.addStream(this.localStream);
      console.log('PeerConnection created');
    } catch (error) {
      //console.error('PeerConnection failed: ', error);
    }
  }

  sendOffer() {
    console.log('Send offer');
    this.pc
      .createOffer()
      .then(this.setAndSendLocalDescription.bind(this), (error: any) => {
        console.error('Send offer failed: ', error);
      });
  }

  sendAnswer() {
    console.log('Send answer');
    this.pc
      .createAnswer()
      .then(this.setAndSendLocalDescription.bind(this), (error: any) => {
        console.error('Send answer failed: ', error);
      });
  }

  setAndSendLocalDescription(sessionDescription: any) {
    this.pc.setLocalDescription(sessionDescription);
    console.log('Local description set');
    this.sendData(sessionDescription);
  }

  onIceCandidate(event: any) {
    if (event.candidate) {
      console.log('ICE candidate');
      this.sendData({
        type: 'candidate',
        candidate: event.candidate,
      });
    }
  }

  onAddStream(event: any) {
    console.log('Add stream');
    console.log(event);
    this.remoteStreamElement = document.querySelector('#remoteStream');
    this.remoteStreamElement.srcObject = event.stream;
  }

  handleSignalingData(data: any) {
    switch (data.type) {
      case 'offer':
        setTimeout(() => {
          this.createPeerConnection();
          this.pc.setRemoteDescription(new RTCSessionDescription(data));
          this.sendAnswer();
        }, 1000);
        break;
      case 'answer':
        setTimeout(() => {
          this.pc.setRemoteDescription(new RTCSessionDescription(data));
        }, 1000);
        break;
      case 'candidate':
        setTimeout(() => {
          this.pc.addIceCandidate(new RTCIceCandidate(data.candidate));
        }, 1000);
        break;
    }
  }

  startCounter() {
    setInterval(() => {
      this.counterTime--;
      var min = Math.floor(this.counterTime / 60);
      var sec = this.counterTime % 60;
      this.counterLabel = min + ':' + sec;
    }, 1000);
  }

  sendMessage() {
    this.texts.push({ sender: true, text: this.message });
    this.socket.emit('data', { video: true, text: this.message });
    this.message = '';
  }
}
