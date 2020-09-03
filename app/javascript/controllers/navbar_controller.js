import { Controller } from 'stimulus'; 
export default class extends Controller {
  static targets = ['navigation']
  connect() {
    this.initNavbar()
  }

  initNavbar() {
    const navbar = this.navigationTarget;
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
          navbar.classList.add('navbar-lewagon-white');
        } else {
          navbar.classList.remove('navbar-lewagon-white');
        }
      });
    }
  }
}