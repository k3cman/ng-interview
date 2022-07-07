export const SENIOR_CODE = {
  service: `@Injectable({
      providedIn: 'root'
    })
    export class SChatService {
        private receivedMessages = new BehaviorSubject<IMessage[]>([]);
        private sentMessages = new BehaviorSubject<IMessage[]>([]);
    
        messagesList$ = forkJoin([
          this.receivedMessages.asObservable(),
          this.sentMessages.asObservable()
        ]);
    
      constructor(private webSocketService: WebsocketService, private userService: UserService) {
          this.webSocketService.messages$.subscribe((data: IMessage[]) => {
            this.receivedMessages.next(data);
          });
        }
    
        sendMessage(content: string): void{
          let message: IMessage = {
            content: '',
            userId: ''
          };
    
          message.content = '';
          message.userId = this.userService.currentUser.id;
    
    
          this.sentMessages.next([...this.sentMessages.getValue(), message]);
          this.webSocketService.sendMessage(message);
        }
    } `,
  component: `
      @Component({
        selector: 'app-s-chat',
        templateUrl: './s-chat.component.html',
        styleUrls: ['./s-chat.component.scss']
      })
      export class SChatComponent {
        newMessage: string = '';
      
        constructor(
          public chatService: SChatService
        ) { }
      
      }
      `,
  template: `
      <div class="chat">
        <div class="messages" *ngFor="let message of chatService.messagesList$ | async">
          <app-chat-message [message]="message"></app-chat-message>
        </div>
        <div class="new-message">
          <textarea [(ngModel)]="newMessage" />
          <button (click)="chatService.sendMessage(newMessage)">Send</button>
        </div>
      </div>
`
}