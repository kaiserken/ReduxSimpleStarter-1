import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {


  it('shows the correct text', () => {
    // create an instance of app
    const component  = renderComponent(App);
    
    expect(component).to.contain('React simple starter');
  });
});
