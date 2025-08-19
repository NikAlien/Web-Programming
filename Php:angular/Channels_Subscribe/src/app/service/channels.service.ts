import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channels } from '../models/channels';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  baseUrl = 'http://localhost/Channels-Subscribers/';

  constructor(private http: HttpClient) { }

  getUserChannels(ownerId : number) : Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'getUserChannels.php?ownerId=' + ownerId);
  }

  getSubscribedChannels(username : string) : Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'getSubscribedChannels.php?name=' + username);
  }

  getAllChannels() : Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'getAll.php');
  }

  updateSubscription(chanId : number, name : string, date : string) : Observable<string> {
    return this.http.get<string>(this.baseUrl + 'updateChannel.php?channelId=' + chanId + '&username=' 
      + name + '&date=' + date);
  }
}
