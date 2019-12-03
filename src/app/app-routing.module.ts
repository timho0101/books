import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { BookOfFlamesModule } from './elements/book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from './elements/book-of-waters/book-of-waters.module';
import { AboutModule } from './elements/about/about.module';
import { ContactModule } from './elements/contact/contact.module';
import { LazyLoadingModule } from './elements/lazy-loading/lazy-loading.module';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'bookOfFlame', loadChildren: () => BookOfFlamesModule},
      {path: 'bookOfWater', loadChildren: () => BookOfWatersModule},
      {path: 'about', loadChildren: () => AboutModule},
      {path: 'contact', loadChildren: () => ContactModule},
      {path: 'lazyLoading', loadChildren: () => LazyLoadingModule}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
