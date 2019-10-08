import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [{id: 'a', title: 'title', content: 'content'}];

describe('<List />', () =>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
            ReactDOM.render(<List header='this is header' cards={cards} key='a'/>, div);
            ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer.create(<List header='this is header' cards={cards} key='a'/>).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); 
