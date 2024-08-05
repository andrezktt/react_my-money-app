import React, { Component } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/lib/components/connect";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";

import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map((e) => +e.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map((e) => +e.value || 0).reduce(sum),
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            cols="12 4"
            label="Nome"
            placeholder="Informe o nome"
            type="text"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            cols="12 4"
            label="Mês"
            placeholder="Informe o mês"
            type="number"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            cols="12 4"
            label="Ano"
            placeholder="Informe o ano"
            type="number"
            readOnly={readOnly}
          />
          <Summary 
            credit={sumOfCredits} 
            debt={sumOfDebts} 
          />
          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Débitos"
            showStatus={true}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector("billingCycleForm");

const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
