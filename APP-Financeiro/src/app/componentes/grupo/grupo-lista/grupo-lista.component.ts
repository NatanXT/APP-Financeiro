import { Component } from '@angular/core';
impo
@Component({
  selector: 'app-grupo-lista',
  standalone: true,
  imports: [
    ButtonModule,
                TagModule,
                CommonModule,
                CardModule,
                TableModule,
                RouterModule,
                DialogModule,
                FormsModule,
                ToastModule,
                InputTextModule,
                SidebarComponent,
                ConfirmDialogModule,
                FloatLabelModule,
                DropdownModule,],
  templateUrl: './grupo-lista.component.html',
  styleUrl: './grupo-lista.component.css'
})
export class GrupoListaComponent {

}
