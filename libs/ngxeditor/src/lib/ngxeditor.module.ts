import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {EditorModule} from "@tinymce/tinymce-angular";
import {MyNgxUploadModule} from '@fsl/ngxupload';

import {LibEditorComponent} from "./component/editor.component";

const COMPONENTS = [
  LibEditorComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    EditorModule,
    MyNgxUploadModule,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class MyNgxEditorModule {

}
