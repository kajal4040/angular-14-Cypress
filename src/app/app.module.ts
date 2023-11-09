import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DumbComponent } from './components/dumb/dumb.component';
import { SmartComponent } from './components/smart/smart.component';
import { HttpClientModule } from '@angular/common/http';
import { FullNamePipe } from './shared/full-name.pipe';
import { SharedService } from './shared/shared.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    FullNamePipe,
    SearchBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
