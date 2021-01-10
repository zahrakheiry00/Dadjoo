import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';


describe('TestComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Dadjoo'`, () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DadjooTest');
  });

  it('test unitTestFun', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const testCom = fixture.componentInstance;

    expect(testCom.unitTestVar).toEqual('a');
    testCom.unitTestFun();
    expect(testCom.unitTestVar).toEqual('b');
  });

});
