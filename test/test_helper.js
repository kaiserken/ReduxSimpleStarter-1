// set up testing environment to run like a browser in the command line
// bundle js represents production appliction code - executed in the browser
// specs are run in the terminal  - two different environments
// to set up jquery to run in terminal
// jsdom  - fakes Dom and html at command line
import jquery from 'jquery';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';


global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// tells jquery to just look at fake instance - don't do your normal thing
const $ = jquery(global.window);


// build render component given a react ComponentClass
// takes a react component and wraps it with jquery
// react docs - test utils
// component instance - need reactDom
// because of redux - need to wrap component class with provider and createstore function with reducers
// state is application level state from redux store
function renderComponent(ComponentClass, props, state){
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store = {createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>);

  return $(ReactDOM.findDOMNode(componentInstance)); //produces the html
}

//build a helper for simulating events
//refer again to simulate docs in react test utils
//$.fn = adding simulate to jquery proto
$.fn.simulate = function(eventName, value){
  if (value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};


// set up chai-jquery
chaiJquery(chai, chai.util, $);


export {renderComponent, expect};
