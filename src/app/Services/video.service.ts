import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoElement!: HTMLVideoElement;

  setVideoElement(element: HTMLVideoElement) {
    this.videoElement = element;
  }

  savePlaybackPosition() {
    if (this.videoElement) {
      localStorage.setItem('videoPlaybackPosition', this.videoElement.currentTime.toString());
    }
  }

  restorePlaybackPosition() {
    const savedPosition = localStorage.getItem('videoPlaybackPosition');
    if (savedPosition && this.videoElement) {
      this.videoElement.currentTime = parseFloat(savedPosition);
    }
  }
}
