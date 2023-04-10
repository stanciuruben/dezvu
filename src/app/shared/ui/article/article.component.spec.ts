import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the testAttribute passed as input', () => {
    const testUrl = 'some-test-selector';
    component.testAttribute = testUrl;
    fixture.detectChanges();
    const articleElement = fixture.debugElement.query(
      By.css('article[data-test="' + testUrl + '"]')
    );
    const articleContentElement = fixture.debugElement.query(
      By.css('div[data-test="' + testUrl + '__content"]')
    );
    const articleContentRightElement = fixture.debugElement.query(
      By.css('div[data-test="' + testUrl + '__content__right"]')
    );
    const articleContentLeftElement = fixture.debugElement.query(
      By.css('div[data-test="' + testUrl + '__content__left"]')
    );
    expect(articleElement).toBeTruthy();
    expect(articleContentElement).toBeTruthy();
    expect(articleContentRightElement).toBeTruthy();
    expect(articleContentLeftElement).toBeTruthy();
  });

  it('should load the backgroundImage url passed as input', () => {
    const testUrl = '/assets/something.png';
    component.backgroundImage = testUrl;
    fixture.detectChanges();
    const articleElement = fixture.debugElement.query(
      By.css('article[data-test="app-article"]')
    );
    const articleStyles = window.getComputedStyle(articleElement.nativeElement);
    expect(articleStyles.getPropertyValue('background-image')).toContain(
      testUrl
    );
  });

  it('should load the contentbackgroundImage url passed as input', () => {
    const testUrl = '/assets/something.png';
    component.contentBackgroundImage = testUrl;
    fixture.detectChanges();
    const articleContentElement = fixture.debugElement.query(
      By.css('div[data-test="app-article__content"]')
    );
    const articleStyles = window.getComputedStyle(
      articleContentElement.nativeElement
    );
    expect(articleStyles.getPropertyValue('background-image')).toContain(
      testUrl
    );
  });
});
