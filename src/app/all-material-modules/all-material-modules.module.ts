import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdCardModule,
   MdAutocompleteModule, MdDatepickerModule, MdRadioModule, MdSlideToggleModule,
   MdSidenavModule, MdListModule, MdTabsModule, MdIconModule, MdProgressSpinnerModule,
   MdProgressBarModule, MdDialogModule, MdTooltipModule, MdSnackBarModule, MdTableModule,
   MdSortModule, MdPaginatorModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule,
    MdCardModule, MdAutocompleteModule, MdDatepickerModule, MdRadioModule, MdSlideToggleModule,
    MdSidenavModule, MdListModule, MdTabsModule, MdIconModule, MdProgressSpinnerModule,
    MdProgressBarModule, MdDialogModule, MdTooltipModule, MdSnackBarModule, MdTableModule,
    MdSortModule, MdPaginatorModule, MdToolbarModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdCardModule,
    MdAutocompleteModule, MdDatepickerModule, MdRadioModule, MdSlideToggleModule,
    MdSidenavModule, MdListModule, MdTabsModule, MdIconModule, MdProgressSpinnerModule,
    MdProgressBarModule, MdDialogModule, MdTooltipModule, MdSnackBarModule, MdTableModule,
    MdSortModule, MdPaginatorModule, MdToolbarModule
  ],
  declarations: []
})
export class AllMaterialModulesModule { }
