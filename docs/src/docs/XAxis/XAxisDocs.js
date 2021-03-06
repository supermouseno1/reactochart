import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDocs from '../../ComponentDocs';
import ExampleSection from '../../ExampleSection';
// autogenerated docs data containing descriptions of this component's props
import propDocs from './propDocs.json';

const examples = [
  {
    id: "basic",
    label: "Basic XAxis",
    codeText: require('raw-loader!./examples/XAxis.js.example'),
  },
  {
    id: "customTicks",
    label: "XAxis with custom ticks",
    codeText: require('raw-loader!./examples/XAxisCustomTicks.js.example'),
  },
];

export default class XAxisExamples extends React.Component {
  render() {
    return <ComponentDocs name="XAxis" propDocs={propDocs}>

      {/* documentation goes here. intersperse docs with examples or leave examples loop below */}

      {examples.map(example => {
        return <ExampleSection {...example} key={example.id} />;
      })}
    </ComponentDocs>;
  }
}
