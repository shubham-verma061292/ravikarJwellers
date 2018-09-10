import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom";
import './../App.css';
import userData from './../jsonData/userData.json'
import AddLoan from './addLoan';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class ViewLoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      village: "",
      typeOfJwel: "silver",
      weight: "",
      phoneNumber: "",
      columnDefs: [
        { headerName: "Name", field: "name", width: 170, checkboxSelection: true },
        { headerName: "Village", field: "village", width: 150 },
        { headerName: "TypeOfJwel", field: "typeofjwel", width: 150 },
        { headerName: "Weight (grams)", field: "weight", width: 150 },
        { headerName: "Phone No", field: "phoneNo" },
        { headerName: "Amount Paid (Rs)", field: "amtPaid", width: 140 },
        { headerName: "Debt (Rs)", field: "debt", width: 140 },
        { headerName: "Date", field: "date" }
      ],
      // rowSelection: "multiple",
      // rowGroupPanelShow: "always",
      //pivotPanelShow: "always",
      paginationPageSize: 10,
      paginationNumberFormatter: function (params) {
        return "[" + params.value.toLocaleString() + "]";
      },
      rowData: [
      ]
    };
  }

  componentDidMount() {
    /*fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response =>
        response.json()
      )
      .then(json => {
        console.log(json);*/
    this.setState({
      rowData: userData
    })
    //})
  }

  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    console.log(selectedNodes);
    const selectedData = selectedNodes.map(node => node.data)
    console.log(selectedData);
    const selectedDataStringPresentation = selectedData.map(node => node.name + ' ' + node.village).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }
  onPageSizeChanged = (newPageSize) => {
    var value = document.getElementById("page-size").value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="text-center">View Loan Information</h2>
        <div
          className="ag-theme-balham"
          style={{
            height: '100%',
            width: '100%',
            display: 'center'
          }}
        >
          <div >
            <span className="bFont ftSize mL10">  Page Size:</span>
            <select onChange={this.onPageSizeChanged} id="page-size">
              <option value="10" defaultValue>
                10
            </option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <AgGridReact
            enableSorting={true}
            enableFilter={true}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection="multiple"
            pagination={true}
            enableColResize={true}
            gridAutoHeight={true}
            //suppressHorizontalScroll={true}
            paginationPageSize={this.state.paginationPageSize}
            paginationNumberFormatter={this.state.paginationNumberFormatter}
            onGridReady={params => this.gridApi = params.api}>
          </AgGridReact>
        </div>
        <button className=" " onClick={this.onButtonClick}>Get selected rows</button>
      </React.Fragment>
    );
  }
}

export default ViewLoan;
