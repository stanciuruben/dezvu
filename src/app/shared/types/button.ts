export default interface Button {
  text: string | undefined;
  href: string | undefined;
  testAttribute: string | undefined;
  size: 'small' | 'normal' | undefined;
  type: string | undefined;
  class: 'light' | undefined;
}
