import { AppModule } from './app.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {    
    beforeEach(async(() => {
        TestBed.configureTestingModule(AppModule.moduleDefinition);   
    }));

    it('should create the app', async(() => {
         let fixture = TestBed.createComponent(AppComponent);
         let app = fixture.componentInstance;
         expect(app).toBeTruthy();
    }));    
});