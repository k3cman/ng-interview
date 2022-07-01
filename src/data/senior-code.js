export const SENIOR_CODE = {
    service: `@Injectable({ 
        providedIn: 'root' 
      }) 
      export class InChatService { 
        private _receivedMsgs = new BehaviorSubject([]); 
        private _sent = new BehaviorSubject([]); 
       
        messagesList$ = combineLatest([ 
          this._receivedMsgs.asObservable(), 
          this._sent.asObservable() 
        ]) 
       
        constructor( 
          private webSocketService: WebsocketService 
        ) { 
          this.webSocketService.messages.subscribe(msg => { 
            this._receivedMsgs.next([...this._receivedMsgs.getValue(), msg]) 
          }) 
        } 
       
        sendMsg(content: string) { 
          let message = { 
            source: '', 
            content: '' 
          }; 
          message.source = 'localhost'; 
          message.content = content; 
       
          this._sent.next([...this._sent.getValue(), message]); 
          this.webSocketService.messages.next(message); 
        } 
      } `,
      component: `
      @Component({ 
        selector: 'app-single-chat', 
        template: '
          <div class="chat"> 
            <div class="message" *ngFor="let msg of pageService.messagesList$ | async"></div> 
          </div> 
          <input type="text" (change)="pageService.sendMsg($event.target.value)">', 
        styleUrls: ['./single-chat.component.scss'], 
        changeDetection: ChangeDetectionStrategy.OnPush 
      }) 
      export class SingleChatComponent { 
        constructor(public pageService: InChatService) { 
        } 
      } 
      `
}