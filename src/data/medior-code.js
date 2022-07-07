export const MEDIOR_CODE = {
    template: `
    <div class="chat">
        <div class="chat-messages" *ngFor="let message of messagesList">
            <app-chat-message [message]="message"></app-chat-message>
        </div>
        <div class="new-message">
            <textarea [(ngModel)]="newMessage" />
            <button (click)="chatService.sendMessage(newMessage)">Send</button>
        </div>
    </div>
    `,
    component: `
        @Component({
            selector: 'app-m-chat',
            templateUrl: './m-chat.component.html',
            styleUrls: ['./m-chat.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        })
        export class MChatComponent implements OnInit {
            messagesList: any;
            newMessage: string = '';
        
            constructor(private chatService: MChatService, private userService: UserService) { }
        
            ngOnInit(): void {
                this.chatService.connect();
                this.chatService.getMessages().subscribe((data) => {
                    this.messagesList = data;
                })
            }
            
            sendMessage(){
                this.chatService.sendMessage({
                    content: this.newMessage,
                    userId: this.userService.currentUser.id
                })
            }
        
        }
    `
}