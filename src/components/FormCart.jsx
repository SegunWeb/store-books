import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import showResult from '../showResult'



const FormCart = ({handleSubmit, submitting}) => (

    <Form onSubmit={handleSubmit(showResult)}>
        <Form.Field>
            <label>Name</label>
            <Field
                name={'userName'}
                component={"input"}
                type={"text"}
                pleaceholder={"Enter name"}
            />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <Field
                name={'email'}
                component={"input"}
                type={"email"}
                pleaceholder={"Enter name"}
            />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' disabled={submitting}>Submit</Button>
    </Form>
);

export default reduxForm({
   form: 'cart-form',
    destroyOnUnmount: false,

})(FormCart);