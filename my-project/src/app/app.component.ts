import { Component } from '@angular/core';
import Editor from '../customCKEditor5Build/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

  public htmlData: string = "<p>Hello, world!</p>"

  public Editor = Editor;

  public config = {
    toolbar: [
      'heading', '|',
      'fontfamily', 'fontsize',
      'alignment',
      'fontColor', 'fontBackgroundColor', '|',
      'bold', 'italic', 'custombutton', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
      'link', '|',
      'outdent', 'indent', '|',
      'bulletedList', 'numberedList', '|',
      'code', 'codeBlock', '|',
      'insertTable', '|',
      'imageUpload', 'blockQuote', '|',
      'undo', 'redo', '|',
      'youtube',
      'mediaEmbed'
    ]
  }
}
