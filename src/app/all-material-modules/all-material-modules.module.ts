import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatCardModule,
   MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
   MatSidenavModule, MatListModule, MatTabsModule, MatIconModule, MatProgressSpinnerModule,
   MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule,
   MatSortModule, MatPaginatorModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule,
    MatCardModule, MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
    MatSidenavModule, MatListModule, MatTabsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatCardModule,
    MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
    MatSidenavModule, MatListModule, MatTabsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatToolbarModule
  ],
  declarations: []
})
export class AllMaterialModulesModule { }
