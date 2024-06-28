import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeIcons } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'm-header',
  standalone: true,
  imports: [MenuModule, ToastModule, SplitButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService]
})
export class MHeaderComponent {
  @Input() title = '';
  menuItems = [{ label: 'Addresses', icon: PrimeIcons.ADDRESS_BOOK }];
  constructor(public messageService: MessageService){}
}
