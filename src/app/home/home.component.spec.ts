import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    class FakeIntersectionObserver {
      observe: () => void;
      unobserve: () => void;

      constructor(
        public callback: (entries: Array<IntersectionObserverEntry>) => void
      ) {
        this.observe = jasmine.createSpy('observe');
        this.unobserve = jasmine.createSpy('unobserve');
      }
    }
    (window as any).IntersectionObserver = IntersectionObserver;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('findClassName()', () => {
    beforeEach(() => {
      component.selectElementsToBeAnimated();
      fixture.detectChanges();
    });

    it('should return the right className for the given entry', () => {
      const randomIndex: number = Math.floor(
        Math.random() * component.elementsToBeAnimated.length
      );
      const fakeEntry = {
        target: {
          id: component.elementsToBeAnimated[randomIndex].id,
        },
      };
      const className = component.elementsToBeAnimated[randomIndex].className;
      spyOn(component, 'findClassName').and.callThrough();
      const resultClass = component.findClassName(
        fakeEntry as IntersectionObserverEntry
      );
      expect(resultClass).toBe(className);
    });

    it('should return undefined if given entry does not exist', () => {
      const wrongId: string = 'some-wrong-id';
      const fakeEntry = {
        target: {
          id: wrongId,
        },
      };
      spyOn(component, 'findClassName').and.callThrough();
      const resultClass = component.findClassName(
        fakeEntry as IntersectionObserverEntry
      );
      expect(resultClass).toBe(undefined);
    });
  });

  describe('ngAfterViewInit()', () => {
    it('should call onObserve() with all the entries and call related functions on intersection', () => {
      const fakeEntries: IntersectionObserverEntry[] = ['1', '2', '3', '4'].map(
        (id) => ({
          isIntersecting: true,
          target: {
            id: id,
            classList: {
              add: (): void => {},
            },
          },
        })
      ) as unknown as IntersectionObserverEntry[];

      const fakeObserver = new IntersectionObserver(() => {});
      spyOn(fakeObserver, 'unobserve');
      spyOn(component, 'onObserve').and.callThrough();
      spyOn(component, 'findClassName');
      spyOn(fakeEntries[0].target.classList, 'add');

      fixture.detectChanges();
      component.onObserve(fakeEntries, fakeObserver);
      fixture.detectChanges();

      expect(fakeObserver.unobserve).toHaveBeenCalledWith(
        fakeEntries[0].target
      );
      expect(component.onObserve).toHaveBeenCalledWith(
        fakeEntries,
        fakeObserver
      );
      expect(component.findClassName).toHaveBeenCalledWith(fakeEntries[0]);
      expect(fakeEntries[0].target.classList.add).toHaveBeenCalledWith(
        undefined as unknown as string
      );
      expect(fakeObserver.unobserve).toHaveBeenCalledWith(
        fakeEntries[0].target
      );
    });
  });
});
