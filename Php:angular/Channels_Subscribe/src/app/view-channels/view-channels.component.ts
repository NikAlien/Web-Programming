import { Component } from '@angular/core';
import { Channels } from '../models/channels';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from '../service/channels.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { PersonService } from '../service/person.service';
import { Author } from '../models/person';

@Component({
  selector: 'app-view-channels',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './view-channels.component.html',
  styleUrl: './view-channels.component.css'
})
export class ViewChannelsComponent {

  username: string | undefined;
  userChannels: Channels[] = [];
  subscribedChannels: Channels[] = [];
  allChannels: Channels[] = [];
  user : Author | undefined;

  constructor(private router: ActivatedRoute, private service: ChannelsService, private userService: PersonService) {

  }

  ngOnInit() : void {
    this.username = String(this.router.snapshot.paramMap.get('username'));
    // this.userService.getUserByUserName(this.username)
    //   .subscribe(newUser => this.user = newUser);
    // this.getUserChannels();
    this.getSubsChannels();
    this.getAllChannels();
  }

  // getUserChannels() : void {
  //   if(this.user)
  //     this.service.getUserChannels(this.user?.id).subscribe(channels => this.userChannels = channels);
  //   console.log(this.userChannels);
  // }

  getSubsChannels() : void {
    if(this.username)
      this.service.getSubscribedChannels(this.username).subscribe(channels => this.subscribedChannels = channels);
    console.log(this.subscribedChannels);
  }

  getAllChannels() : void {
    if(this.username)
      this.service.getAllChannels().subscribe(channels => this.allChannels = channels);
  }


  subscribeChannel(chanId : number | undefined) : void {
    const date = new Date();
    const datepipe: DatePipe = new DatePipe('en-US')
    const format = datepipe.transform(date, 'yyyy-mm-dd');
    if(chanId && this.username && format)
      this.service.updateSubscription(chanId, this.username, format).subscribe(msg => alert(msg));
  }
}
