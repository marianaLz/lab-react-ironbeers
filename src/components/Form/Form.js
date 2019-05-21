import React from "react";
import NavBar from "../NavBar";
import FormField from "./FormField";

const Form = ({ onChange, onSubmit, history }) => (
  <div>
    <NavBar />
    <main className="uk-flex uk-flex-center">
      <form
        onSubmit={e => {
          onSubmit(e);
          history.push("/beers");
        }}
      >
        <FormField
          label="Name"
          type="text"
          name="name"
          holder="Corona"
          onChange={onChange}
        />
        <FormField
          label="Tagline"
          type="text"
          name="tagline"
          holder="The most refined beer"
          onChange={onChange}
        />
        <FormField
          label="Description"
          type="textarea"
          name="description"
          holder="Corona is the most refined beer..."
          onChange={onChange}
        />
        <FormField
          label="First Brewed"
          type="text"
          name="first_brewed"
          holder="MM/YYYY"
          onChange={onChange}
        />
        <FormField
          label="Brewers Tips"
          type="text"
          name="brewers_tips"
          holder="Drink it with lime"
          onChange={onChange}
        />
        <FormField
          label="Attenuation Level"
          type="number"
          name="attenuation_level"
          holder="80"
          onChange={onChange}
        />
        <FormField
          label="Contributed By"
          type="text"
          name="contributed_by"
          holder="-- Tell us your name! --"
          onChange={onChange}
        />
        <button
          id="input"
          className="uk-button uk-button-primary uk-width-xxlarge uk-margin-small-bottom"
          type="submit"
        >
          ADD NEW
        </button>
      </form>
    </main>
  </div>
);

export default Form;
