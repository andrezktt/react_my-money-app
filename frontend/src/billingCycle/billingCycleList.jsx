import React, { Component } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/lib/components/connect";

import { getList } from "./billingCycleActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((e) => (
      <tr key={e._id}>
        <td>{e.name}</td>
        <td>{e.month}</td>
        <td>{e.year}</td>
      </tr>
    ));
  }
  render() {
    console.log(this.props.list);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
